var BASE_URL = "/docs/";

module.exports = {
	title: "Shipyard Documentation",
	tagline:
		"Detailed documentation, how-to guides, and tutorials to help data teams use Shipyard for their data orchestration and data operations needs.",
	url: process.env.SHIPYARD__DOCUSAURUS_URL || "https://www.shipyardapp.com",
	baseUrl: BASE_URL,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "throw",
	favicon: BASE_URL + "img/favicon.ico",
	organizationName: "Shipyard", // Usually your GitHub org/user name.
	projectName: "Shipyard-Documentation", // Usually your repo name.
	trailingSlash: true,
	scripts: [
		{
			src: BASE_URL + "js/onetrust.js",
			async: false,
		},
		{
			src: BASE_URL + "js/onetrust-segment.js",
			async: false,
		},
	],
	themeConfig: {
		algolia:
			process.env.NODE_ENV === "production"
				? {
						appId: process.env.ALGOLIA_APP_ID,
						apiKey: process.env.ALGOLIA_API_KEY,
						indexName: "shipyardapp",

						// Optional: see doc section bellow
						// contextualSearch: true,

						// Optional: Algolia search parameters
						searchParameters: {},

						//... other Algolia params
				  }
				: void 0,
		navbar: {
			title: "Shipyard",
			logo: {
				alt: "Shipyard Logo",
				src: BASE_URL + "img/logo.svg",
			},
			items: [
				{
					to: "/",
					activeBasePath: "docs",
					label: "Documentation",
					position: "left",
				},
				{
					to: "https://www.shipyardapp.com/",
					label: "Product",
					position: "left",
				},
				{
					to: "https://www.shipyardapp.com/blog/",
					label: "Blog",
					position: "left",
				},
				{
					to: "https://www.shipyardapp.com/demo",
					label: "Talk to Sales",
					position: "left",
				},
				// {
				//   href: 'https://github.com/shipyardapp/Shipyard-Documentation',
				//   label: 'GitHub',
				//   position: 'right',
				// },
			],
		},
		footer: {
			style: "dark",
			// links: [
			//   {
			//     title: 'Docs',
			//     items: [
			//       {
			//         label: 'Style Guide',
			//         to: 'docs/',
			//       },
			//       {
			//         label: 'Second Doc',
			//         to: 'docs/doc2/',
			//       },
			//     ],
			//   },
			//   {
			//     title: 'Community',
			//     items: [
			//       {
			//         label: 'Stack Overflow',
			//         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
			//       },
			//       {
			//         label: 'Discord',
			//         href: 'https://discordapp.com/invite/docusaurus',
			//       },
			//       {
			//         label: 'Twitter',
			//         href: 'https://twitter.com/docusaurus',
			//       },
			//     ],
			//   },
			//   {
			//     title: 'More',
			//     items: [
			//       {
			//         label: 'Blog',
			//         to: 'blog',
			//       },
			//       {
			//         label: 'GitHub',
			//         href: 'https://github.com/facebook/docusaurus',
			//       },
			//     ],
			//   },
			// ],
			copyright: `Copyright © ${new Date().getFullYear()} Shipyard, LLC.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					routeBasePath: "/",
					// Please change this to your repo.
					editUrl:
						"https://github.com/shipyardapp/Shipyard-Documentation/edit/main/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
				sitemap: {
					changefreq: "weekly",
					priority: 0.5,
				},
				googleTagManager: {
					containerId: "GTM-WBTKTML",
				},
			},
		],
	],
	plugins: [
		"plugin-image-zoom",
		[
			"@docusaurus/plugin-client-redirects",
			{
				redirects: [
					{
						to: "/glossary",
						from: ["/reference/glossary-of-terms"],
					},
					{
						to: "/reference/blueprints/blueprint-library/match-type/",
						from: "/reference/blueprint-library/match-type/",
					},
					{
						to: "/reference/blueprints/blueprint-library/blueprint-library-overview",
						from: [
							"/reference/blueprint-library",
							"/reference/blueprint-library/blueprint-library",
						],
					},
					{
						to: "/blueprint-library/airtable/airtable-overview",
						from: ["/blueprint-library/airtable"],
					},
					{
						to: "/blueprint-library/amazon-athena/amazon-athena-overview",
						from: ["/blueprint-library/amazon-athena"],
					},
					{
						to: "/blueprint-library/amazon-redshift/amazon-redshift-overview",
						from: ["/blueprint-library/amazon-redshift"],
					},
					{
						to: "/blueprint-library/amazon-s3/amazon-s3-overview",
						from: ["/blueprint-library/amazon-s3"],
					},
					{
						to: "/blueprint-library/azure-blob-storage/azure-blob-storage-overview",
						from: ["/blueprint-library/azure-blob-storage"],
					},
					{
						to: "/blueprint-library/bitio/bitio-overview",
						from: ["/blueprint-library/bitio"],
					},
					{
						to: "/blueprint-library/box/box-overview",
						from: ["/blueprint-library/box"],
					},
					{
						to: "/blueprint-library/data-manipulation/data-manipulation-overview",
						from: ["/blueprint-library/data-manipulation"],
					},
					{
						to: "/blueprint-library/dbt-cloud/dbt-cloud-overview",
						from: ["/blueprint-library/dbt-cloud"],
					},
					{
						to: "/blueprint-library/domo/domo-overview",
						from: ["/blueprint-library/domo"],
					},
					{
						to: "/blueprint-library/dropbox/dropbox-overview",
						from: ["/blueprint-library/dropbox"],
					},
					{
						to: "/blueprint-library/email/email-overview",
						from: ["/blueprint-library/email"],
					},
					{
						to: "/blueprint-library/file-manipulation/file-manipulation-overview",
						from: ["/blueprint-library/file-manipulation"],
					},
					{
						to: "/blueprint-library/fivetran/fivetran-overview",
						from: ["/blueprint-library/fivetran"],
					},
					{
						to: "/blueprint-library/ftp/ftp-overview",
						from: ["/blueprint-library/ftp"],
					},
					{
						to: "/blueprint-library/google-bigquery/google-bigquery-overview",
						from: ["/blueprint-library/google-bigquery"],
					},
					{
						to: "/blueprint-library/google-cloud-storage/google-cloud-storage-overview",
						from: ["/blueprint-library/google-cloud-storage"],
					},
					{
						to: "/blueprint-library/google-drive/google-drive-overview",
						from: ["/blueprint-library/google-drive"],
					},
					{
						to: "/blueprint-library/google-sheets/google-sheets-overview",
						from: ["/blueprint-library/google-sheets"],
					},
					{
						to: "/blueprint-library/http/http-overview",
						from: ["/blueprint-library/http"],
					},
					{
						to: "/blueprint-library/microsoft-sql-server/microsoft-sql-server-overview",
						from: ["/blueprint-library/microsoft-sql-server"],
					},
					{
						to: "/blueprint-library/mysql/mysql-overview",
						from: ["/blueprint-library/mysql"],
					},
					{
						to: "/blueprint-library/postgresql/postgresql-overview",
						from: ["/blueprint-library/postgresql"],
					},
					{
						to: "/blueprint-library/sftp/sftp-overview",
						from: ["/blueprint-library/sftp"],
					},
					{
						to: "/blueprint-library/slack/slack-overview",
						from: ["/blueprint-library/slack"],
					},
					{
						to: "/blueprint-library/snowflake/snowflake-overview",
						from: ["/blueprint-library/snowflake"],
					},
					{
						to: "/blueprint-library/tableau/tableau-overview",
						from: ["/blueprint-library/tableau"],
					},
					{
						to: "/data-packages/dbt-core/dbt-core-overview",
						from: ["/tutorials/dbt-blueprint"],
					},
					{
						to: "/data-packages/great-expectations/great-expectations-blueprint",
						from: ["/tutorials/great-expectations-blueprint"],
					},
				],
				createRedirects: function (existingPath) {
					if (
						existingPath.includes(
							"airtable#download-table-or-view-to-csv"
						)
					) {
						return [
							"/blueprint-library/airtable/airtable-download-table-or-view-to-csv",
						];
					}
					if (existingPath.includes("amazon-athena#execute-query")) {
						return [
							"/blueprint-library/amazon-athena/amazon-athena-execute-query",
						];
					}
					if (
						existingPath.includes(
							"amazon-athena#store-query-results-as-csv"
						)
					) {
						return [
							"/blueprint-library/amazon-athena/amazon-athena-store-query-results-as-csv",
						];
					}
					if (
						existingPath.includes("amazon-redshift#execute-query")
					) {
						return [
							"/blueprint-library/amazon-redshift/amazon-redshift-execute-query",
						];
					}
					if (
						existingPath.includes(
							"amazon-redshift#store-query-results-as-csv"
						)
					) {
						return [
							"/blueprint-library/amazon-redshift/amazon-redshift-store-query-results-as-csv",
						];
					}
					if (
						existingPath.includes(
							"amazon-redshift#upload-csv-to-table"
						)
					) {
						return [
							"/blueprint-library/amazon-redshift/amazon-redshift-upload-csv-to-table",
						];
					}
					if (existingPath.includes("amazon-s3#download-files")) {
						return [
							"/blueprint-library/amazon-s3/amazon-s3-download-files",
						];
					}
					if (existingPath.includes("amazon-s3#upload-files")) {
						return [
							"/blueprint-library/amazon-s3/amazon-s3-upload-files",
						];
					}
					if (
						existingPath.includes(
							"azure-blob-storage#download-files"
						)
					) {
						return [
							"/blueprint-library/azure-blob-storage/azure-blob-storage-download-files",
						];
					}
					if (
						existingPath.includes("azure-blob-storage#upload-files")
					) {
						return [
							"/blueprint-library/azure-blob-storage/azure-blob-storage-upload-files",
						];
					}
					if (existingPath.includes("bit.io#execute-query")) {
						return ["/blueprint-library/bitio/bitio-execute-query"];
					}
					if (
						existingPath.includes(
							"bit.io#store-query-results-as-csv"
						)
					) {
						return [
							"/blueprint-library/bitio/bitio-store-query-results-as-csv/",
						];
					}
					if (existingPath.includes("bit.io#upload-csv-to-table")) {
						return [
							"/blueprint-library/bitio/bitio-upload-csv-to-table/",
						];
					}
					if (existingPath.includes("box#download-files")) {
						return ["/blueprint-library/box/box-download-files"];
					}
					if (existingPath.includes("box#upload-files")) {
						return ["/blueprint-library/box/box-upload-files"];
					}
					if (existingPath.includes("census#check-sync-status")) {
						return [
							"/blueprint-library/census/census-check-sync-status",
						];
					}
					if (existingPath.includes("census#trigger-sync")) {
						return [
							"/blueprint-library/census/census-trigger-sync",
						];
					}

					if (
						existingPath.includes(
							"databricks#download-files-from-dbfs"
						)
					) {
						return [
							"/blueprint-library/databricks/databricks-download-files-from-dbfs",
						];
					}
					if (
						existingPath.includes(
							"databricks#delete-files-from-dbfs"
						)
					) {
						return [
							"/blueprint-library/databricks/databricks-delete-files-from-dbfs",
						];
					}
					if (
						existingPath.includes(
							"databricks#move-or-rename-files-on-dbfs"
						)
					) {
						return [
							"/blueprint-library/databricks/databricks-move-or-rename-files-on-dbfs",
						];
					}
					if (
						existingPath.includes("databricks#upload-files-to-dbfs")
					) {
						return [
							"/blueprint-library/databricks/databricks-upload-files-to-dbfs",
						];
					}

					if (
						existingPath.includes(
							"data-manipulation#compare-datasets"
						)
					) {
						return [
							"/blueprint-library/data-manipulation/data-manipulation-compare-datasets",
						];
					}
					if (existingPath.includes("dbt-cloud#check-run-status")) {
						return [
							"/blueprint-library/dbt-cloud/dbt-cloud-check-run-status",
						];
					}
					if (
						existingPath.includes(
							"dbt-cloud#download-logs-and-artifacts"
						)
					) {
						return [
							"/blueprint-library/dbt-cloud/dbt-cloud-download-logs-and-artifacts",
						];
					}
					if (existingPath.includes("dbt-cloud#execute-job")) {
						return [
							"/blueprint-library/dbt-cloud/dbt-cloud-execute-job",
						];
					}
					if (
						existingPath.includes(
							"dbt-cloud#execute-job-and-download-results"
						)
					) {
						return [
							"/blueprint-library/dbt-cloud/dbt-cloud-execute-job-and-download-results",
						];
					}
					if (existingPath.includes("dropbox#download-files")) {
						return [
							"/blueprint-library/dropbox/dropbox-download-files",
						];
					}
					if (existingPath.includes("dropbox#upload-files")) {
						return [
							"/blueprint-library/dropbox/dropbox-upload-files",
						];
					}
					if (existingPath.includes("email#send-message")) {
						return ["/blueprint-library/email/email-send-message"];
					}
					if (
						existingPath.includes(
							"email#send-message-conditionally"
						)
					) {
						return [
							"/blueprint-library/email/email-send-message-conditionally",
						];
					}
					if (existingPath.includes("email#send-message-with-file")) {
						return [
							"/blueprint-library/email/email-send-message-with-file",
						];
					}
					if (
						existingPath.includes(
							"file-manipulation#compress-files"
						)
					) {
						return [
							"/blueprint-library/file-manipulation/file-manipulation-compress-files",
						];
					}
					if (
						existingPath.includes("file-manipulation#convert-csv")
					) {
						return [
							"/blueprint-library/file-manipulation/file-manipulation-convert-csv",
						];
					}
					if (
						existingPath.includes(
							"file-manipulation#decompress-files"
						)
					) {
						return [
							"/blueprint-library/file-manipulation/file-manipulation-decompress-files",
						];
					}
					if (existingPath.includes("fivetran#check-sync-status")) {
						return [
							"/blueprint-library/fivetran/fivetran-check-sync-status",
						];
					}
					if (existingPath.includes("fivetran#execute-sync")) {
						return [
							"/blueprint-library/fivetran/fivetran-execute-sync",
						];
					}
					if (
						existingPath.includes(
							"fivetran#execute-sync-and-check-status"
						)
					) {
						return [
							"/blueprint-library/fivetran/fivetran-execute-sync-and-check-status",
						];
					}
					if (existingPath.includes("fivetran#update-connector")) {
						return [
							"/blueprint-library/fivetran/fivetran-update-connector",
						];
					}
					if (existingPath.includes("ftp#download-files")) {
						return ["/blueprint-library/ftp/ftp-download-files"];
					}
					if (existingPath.includes("ftp#upload-files")) {
						return ["/blueprint-library/ftp/ftp-upload-files"];
					}
					if (
						existingPath.includes("google-bigquery#execute-query")
					) {
						return [
							"/blueprint-library/google-bigquery/google-bigquery-execute-query",
						];
					}
					if (
						existingPath.includes(
							"google-bigquery#store-query-results-as-csv"
						)
					) {
						return [
							"/blueprint-library/google-bigquery/google-bigquery-store-query-results-as-csv",
						];
					}
					if (
						existingPath.includes(
							"google-bigquery#store-query-results-in-google-cloud-storage"
						)
					) {
						return [
							"/blueprint-library/google-bigquery/google-bigquery-store-query-results-in-google-cloud-storage",
						];
					}
					if (
						existingPath.includes(
							"google-bigquery#upload-csv-to-table"
						)
					) {
						return [
							"/blueprint-library/google-bigquery/google-bigquery-upload-csv-to-table",
						];
					}
					if (
						existingPath.includes(
							"google-cloud-storage#download-files"
						)
					) {
						return [
							"/blueprint-library/google-cloud-storage/google-cloud-storage-download-files",
						];
					}
					if (
						existingPath.includes(
							"google-cloud-storage#upload-files"
						)
					) {
						return [
							"/blueprint-library/google-cloud-storage/google-cloud-storage-upload-files",
						];
					}
					if (existingPath.includes("google-drive#download-files")) {
						return [
							"/blueprint-library/google-drive/google-drive-download-files",
						];
					}
					if (existingPath.includes("google-drive#upload-files")) {
						return [
							"/blueprint-library/google-drive/google-drive-upload-files",
						];
					}
					if (
						existingPath.includes(
							"google-sheets#clear-data-from-sheet"
						)
					) {
						return [
							"/blueprint-library/google-sheets/google-sheets-clear-data-from-sheet",
						];
					}
					if (
						existingPath.includes(
							"google-sheets#download-sheet-to-csv"
						)
					) {
						return [
							"/blueprint-library/google-sheets/google-sheets-download-sheet-to-csv",
						];
					}
					if (
						existingPath.includes(
							"google-sheets#upload-csv-to-sheet"
						)
					) {
						return [
							"/blueprint-library/google-sheets/google-sheets-upload-csv-to-sheet",
						];
					}
					if (existingPath.includes("hex#check-run-status")) {
						return ["/blueprint-library/hex/hex-check-run-status"];
					}
					if (existingPath.includes("hex#run-project")) {
						return ["/blueprint-library/hex/hex-run-project"];
					}
					if (existingPath.includes("hightouch#check-sync-status")) {
						return [
							"/blueprint-library/hightouch/hightouch-check-sync-status",
						];
					}
					if (existingPath.includes("hightouch#trigger-sync")) {
						return [
							"/blueprint-library/hightouch/hightouch-trigger-sync",
						];
					}
					if (existingPath.includes("http#download-file-from-url")) {
						return [
							"/blueprint-library/http/http-download-file-from-url",
						];
					}
					if (existingPath.includes("http#requests")) {
						return ["/blueprint-library/http/http-requests"];
					}
					if (
						existingPath.includes(
							"microsoft-sql-server#execute-query"
						)
					) {
						return [
							"/blueprint-library/microsoft-sql-server/microsoft-sql-server-execute-query",
						];
					}
					if (
						existingPath.includes(
							"microsoft-sql-server#store-query-results-as-csv"
						)
					) {
						return [
							"/blueprint-library/microsoft-sql-server/microsoft-sql-server-store-query-results-as-csv",
						];
					}
					if (
						existingPath.includes(
							"microsoft-sql-server#upload-csv-to-table"
						)
					) {
						return [
							"/blueprint-library/microsoft-sql-server/microsoft-sql-server-upload-csv-to-table",
						];
					}
					if (existingPath.includes("mode#check-run-status")) {
						return [
							"/blueprint-library/mode/mode-check-run-status",
						];
					}
					if (existingPath.includes("mode#download-report-as-file")) {
						return [
							"/blueprint-library/mode/mode-download-report-as-file",
						];
					}
					if (existingPath.includes("mode#trigger-report-refresh")) {
						return [
							"/blueprint-library/mode/mode-trigger-report-refresh",
						];
					}
					if (existingPath.includes("mysql#execute-query")) {
						return ["/blueprint-library/mysql/mysql-execute-query"];
					}
					if (
						existingPath.includes(
							"mysql#store-query-results-as-csv"
						)
					) {
						return [
							"/blueprint-library/mysql/mysql-store-query-results-as-csv",
						];
					}
					if (existingPath.includes("mysql#upload-csv-to-table")) {
						return [
							"/blueprint-library/mysql/mysql-upload-csv-to-table",
						];
					}

					if (existingPath.includes("postgresql#execute-query")) {
						return [
							"/blueprint-library/postgresql/postgresql-execute-query",
						];
					}
					if (
						existingPath.includes(
							"postgresql#store-query-results-as-csv"
						)
					) {
						return [
							"/blueprint-library/postgresql/postgresql-store-query-results-as-csv",
						];
					}
					if (
						existingPath.includes("postgresql#upload-csv-to-table")
					) {
						return [
							"/blueprint-library/postgresql/postgresql-upload-csv-to-table",
						];
					}
					if (
						existingPath.includes("rudderstack#check-sync-status")
					) {
						return [
							"/blueprint-library/rudderstack/rudderstack-check-sync-status",
						];
					}
					if (existingPath.includes("rudderstack#trigger-sync")) {
						return [
							"/blueprint-library/rudderstack/rudderstack-trigger-sync",
						];
					}
					if (existingPath.includes("sftp#download-files")) {
						return ["/blueprint-library/sftp/sftp-download-files"];
					}
					if (existingPath.includes("sftp#upload-files")) {
						return ["/blueprint-library/sftp/sftp-upload-files"];
					}
					if (existingPath.includes("shipyard-api#export-logs")) {
						return [
							"/blueprint-library/shipyard-api/shipyard-api-export-logs",
						];
					}
					if (existingPath.includes("slack#send-message")) {
						return ["/blueprint-library/slack/slack-send-message"];
					}
					if (
						existingPath.includes(
							"slack#send-message-conditionally"
						)
					) {
						return [
							"/blueprint-library/slack/slack-send-message-conditionally",
						];
					}
					if (existingPath.includes("slack#send-message-with-file")) {
						return [
							"/blueprint-library/slack/slack-send-message-with-file",
						];
					}
					if (existingPath.includes("snowflake#execute-query")) {
						return [
							"/blueprint-library/snowflake/snowflake-execute-query",
						];
					}
					if (
						existingPath.includes(
							"snowflake#store-query-results-as-csv"
						)
					) {
						return [
							"/blueprint-library/snowflake/snowflake-store-query-results-as-csv",
						];
					}
					if (
						existingPath.includes("snowflake#upload-csv-to-table")
					) {
						return [
							"/blueprint-library/snowflake/snowflake-upload-csv-to-table",
						];
					}
				},
			},
		],
	],
};
