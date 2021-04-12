var BASE_URL = '/docs/';

module.exports = {
	title: 'Shipyard Documentation',
	tagline: 'Detailed documentation and guides to help data teams use Shipyard for their data operations.',
	url: process.env.SHIPYARD__DOCUSAURUS_URL || 'https://www.shipyardapp.com/',
	baseUrl: BASE_URL,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	favicon: BASE_URL + 'img/favicon.ico',
	organizationName: 'Shipyard', // Usually your GitHub org/user name.
	projectName: 'Shipyard-Documentation', // Usually your repo name.
	scripts: [
		{
			src: BASE_URL + 'js/segment.js',
		},
	],
	themeConfig: {
		algolia: {
			apiKey: '2030b32cbbe6b44fceed15711cd0ed4c',
			indexName: 'shipyardapp',

			// Optional: see doc section bellow
			// contextualSearch: true,

			// Optional: Algolia search parameters
			searchParameters: {},

			//... other Algolia params
		},
    googleAnalytics: {
      trackingID: 'UA-142749850-1',
      anonymizeIP: true,
    },
		navbar: {
			title: 'Shipyard',
			logo: {
				alt: 'Shipyard Logo',
				src: BASE_URL + 'img/logo.svg',
			},
			items: [
				{
					to: '/',
					activeBasePath: 'docs',
					label: 'Documentation',
					position: 'left',
				},
				{to: 'https://www.shipyardapp.com/', label: 'Product', position: 'left'},
				{to: 'https://www.shipyardapp.com/blog', label: 'Blog', position: 'left'},
				{to: 'https://www.shipyardapp.com/demo', label: 'Watch a Demo', position: 'left'},
				{to: 'https://app.shipyardapp.com/auth/signup?ref=documentation', label: 'Start Free Trial', position: 'left'},
				// {
				//   href: 'https://github.com/shipyardapp/Shipyard-Documentation',
				//   label: 'GitHub',
				//   position: 'right',
				// },
			],
		},
		footer: {
			style: 'dark',
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
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					routeBasePath: '/',
					// Please change this to your repo.
					editUrl: 'https://github.com/shipyardapp/Shipyard-Documentation/edit/main/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
					trailingSlash: false,
				},
			},
		],
	],
	plugins: [
		'plugin-image-zoom',
		[
			'@docusaurus/plugin-client-redirects',
			{
				redirects: [
					{
						to: '/glossary', // string
						from: ['/reference/glossary-of-terms'], // string | string[]
					},
				],
			},
		],
	],
};
