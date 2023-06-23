var domain = window.location.hostname;

var script = document.createElement("script");
script.type = "text/javascript";
script.charset = "UTF-8";
script.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js";

// based on the domain, set the data-domain-script attribute
if (domain === "staging.shipyardapp.com") {
	script.setAttribute(
		"data-domain-script",
		"d283bdeb-7f75-4aa8-a69d-6250bf525f03-test"
	);
} else if (domain === "shipyardapp.com" || domain === "www.shipyardapp.com") {
	script.setAttribute(
		"data-domain-script",
		"d283bdeb-7f75-4aa8-a69d-6250bf525f03"
	);
}

document.head.appendChild(script);
