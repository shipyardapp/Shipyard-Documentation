function OptanonWrapper() {
	const SEGMENT_WRITE_KEY = "1dixOtZOKxODPTIqYqckGDgNAMChu9nY";
	//determines whether All: false is added to Segment's analytics.load integrations object https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#selecting-destinations
	const DISABLE_DESTINATIONS_BY_DEFAULT = true;

	let previousOneTrustGroupIds = [];

	//mapping OneTrust cookie categories to Segment's Destination categories.
	//to get destination names and cateogories assiociated with Segment write key, use this script https://codepen.io/samuelkahr/pen/gOpWyEG
	const ONE_TRUST_SEGMENT_MAPPING = {
		//OneTrust Strictly Necessary Cookies
		C0001: [],
		//OneTrust Performance Cookies
		C0002: ["Analytics", "Heatmaps & Recordings"],
		//OneTrust Functional Cookies
		C0003: ["Actions", "Surveys", "Customer Success"],
		//OneTrust Targeting Cookies
		C0004: ["Advertising"],
	};

	//helper function gets OneTrust active groups from window. Returns array of active groups users consented to
	function getConsentGroups() {
		if (!window.OnetrustActiveGroups) {
			console.log("No OneTrust groups have been consented to");
			return [];
		}
		const oneTrustActiveGroupArray = window.OnetrustActiveGroups.split(
			","
		).filter((e) => e.startsWith("C"));

		previousOneTrustGroupIds = oneTrustActiveGroupArray;

		localStorage.setItem(
			"onetrust_active_groups",
			JSON.stringify(oneTrustActiveGroupArray)
		);

		return oneTrustActiveGroupArray;
	}

	async function getConsentedIntegrations(
		enabledIntegrations,
		oneTrustGroupIds
	) {
		// Get consented segment categories.
		const segmentCategories = oneTrustGroupIds
			.map(
				(oneTrustGroupId) => ONE_TRUST_SEGMENT_MAPPING[oneTrustGroupId]
			)
			.filter((segmentCategory) => segmentCategory)
			.flat(1); // Filter out `null` mappings.

		// Filter enabled integrations by consented segment categories.
		const consentedIntegrations = enabledIntegrations.filter(
			(enabledIntegration) => {
				const isConsented = segmentCategories.includes(
					enabledIntegration.category
				);
				return isConsented;
			}
		);
		return consentedIntegrations;
	}

	//helper function determines whether user has given consent for any cookie groups OTHER than strictly necessary. Returns boolean
	function shouldLoadAjs(oneTrustActiveGroups) {
		return (
			oneTrustActiveGroups.includes("C0002") ||
			oneTrustActiveGroups.includes("C0003") ||
			oneTrustActiveGroups.includes("C0004")
		);
	}

	//Calls Segment API to get all destinations connected to source write key. Returns object of destination info
	async function fetchDestinationForWriteKey(writeKey) {
		if (!writeKey) {
			return [];
		}
		// To get currently enabled integrations, execute HTTP get to: https://codepen.io/samuelkahr/pen/gOpWyEG
		const res = await window.fetch(
			`https://cdn.segment.com/v1/projects/${writeKey}/integrations`
		);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch integrations for write key ${writeKey}: HTTP ${res.status} ${res.statusText}`
			);
		}

		const destinations = await res.json();

		// Rename creationName to id to abstract default data model
		for (const destination of destinations) {
			destination.id = destination.creationName;
			delete destination.creationName;
		}

		return destinations;
	}

	//Main executable that calls other helper functions. If user has consented to active group
	//other than strictly necessary, loads A.js with destination preferences

	async function loadAnalytics() {
		const enabledIntegrations = await fetchDestinationForWriteKey(
			SEGMENT_WRITE_KEY
		);
		const oneTrustGroupIds = getConsentGroups();

		const consentedIntegrations = await getConsentedIntegrations(
			enabledIntegrations,
			oneTrustGroupIds
		);

		//If All:false is added to integrations object, you need to be sure to add Segment.io:true or else data will not be sent to Segment + cloud mode destinations
		const destinationPreferences = DISABLE_DESTINATIONS_BY_DEFAULT
			? { All: true, "Segment.io": true }
			: {};

		//setting consented destination to truthy in destinationPreferences
		consentedIntegrations.forEach((consentedIntegration) => {
			destinationPreferences[consentedIntegration.id] = true;
		});

		//creating array with names of destinations consented to
		const consentedIntegrationArray = [];
		for (const value in consentedIntegrations) {
			consentedIntegrationArray.push(consentedIntegrations[value].name);
		}

		//setting destinations w/o consent to false in destinationPreferences
		enabledIntegrations.forEach((integration) => {
			if (!consentedIntegrationArray.includes(integration.name)) {
				destinationPreferences[integration.name] = false;
			}
		});

		//calling helper funciton to determine whether any categories other than strictly necessary have been consented to
		const loadAjs = shouldLoadAjs(oneTrustGroupIds);

		if (getConsentGroupChange()) {
			//localStorage.setItem('onetrust_active_groups', JSON.stringify(oneTrustActiveGroupArray))
			console.log("fire");
		}

		//Segment integrations object https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#load-options
		if (loadAjs) {
			window.destinationPreferences = destinationPreferences;
			//console.log(destinationPreferences);
			window.analytics.load(SEGMENT_WRITE_KEY, {
				integrations: destinationPreferences,
			});
			window.analytics.page();
		} else {
			console.log("No groups other than strictly necessary consented to");
		}
	}

	function getConsentGroupChange() {
		let consentGroupChange;
		if (localStorage.getItem("onetrust_active_groups")) {
			let arrayA = getConsentGroups();
			let arrayB = JSON.parse(
				localStorage.getItem("onetrust_active_groups")
			);

			let difference = arrayA
				.filter((x) => !arrayB.includes(x))
				.concat(arrayB.filter((x) => !arrayA.includes(x)));

			console.log(difference);
			consentGroupChange = difference.length > 0 ? true : false;
		} else {
			consentGroupChange = false;
		}
		return consentGroupChange;
	}

	loadAnalytics();
	//You may add any other funtion here from the analytics.js library
}
