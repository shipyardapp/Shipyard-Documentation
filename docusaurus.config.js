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
    scripts: [
        {
            src: BASE_URL + "js/segment.js",
        },
    ],
    themeConfig: {
        algolia: {
            apiKey: "2030b32cbbe6b44fceed15711cd0ed4c",
            indexName: "shipyardapp",

            // Optional: see doc section bellow
            // contextualSearch: true,

            // Optional: Algolia search parameters
            searchParameters: {},

            //... other Algolia params
        },
        googleAnalytics: {
            trackingID: "UA-142749850-1",
            anonymizeIP: true,
        },
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
                    to: "https://www.shipyardapp.com/blog",
                    label: "Blog",
                    position: "left",
                },
                {
                    to: "https://www.shipyardapp.com/demo",
                    label: "Watch a Demo",
                    position: "left",
                },
                {
                    to: "https://app.shipyardapp.com/auth/signup?ref=documentation",
                    label: "Start Free Trial",
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
                        to: "/reference/blueprint-library/blueprint-library/",
                        from: ["/reference/blueprint-library"],
                    },
                    {
                        to: "/tutorials/dbt-core-blueprint",
                        from: [
                            "/blueprint-library/dbt",
                            "/tutorials/dbt-blueprint",
                        ],
                    },

                    {
                        to: "/blueprint-library/airtable/airtable-download-table-or-view-to-csv",
                        from: ["/blueprint-library/airtable"]
                    },
                    {
                        to: "/blueprint-library/amazon-athena/amazon-athena-execute-query",
                        from: ["/blueprint-library/amazon-athena"]
                    },
                    {
                        to: "/blueprint-library/amazon-athena/amazon-athena-store-query-results-as-csv",
                        from: ["/blueprint-library/amazon-athena"]
                    },
                    {
                        to: "/blueprint-library/amazon-redshift/amazon-redshift-execute-query",
                        from: ["/blueprint-library/amazon-redshift"]
                    },
                    {
                        to: "/blueprint-library/amazon-redshift/amazon-redshift-store-query-results-as-csv",
                        from: ["/blueprint-library/amazon-redshift"]
                    },
                    {
                        to: "/blueprint-library/amazon-redshift/amazon-redshift-upload-csv-to-table",
                        from: ["/blueprint-library/amazon-redshift"]
                    },
                    {
                        to: "/blueprint-library/amazon-s3/amazon-s3-download-files",
                        from: ["/blueprint-library/amazon-s3"]
                    },
                    {
                        to: "/blueprint-library/amazon-s3/amazon-s3-upload-files",
                        from: ["/blueprint-library/amazon-s3"]
                    },
                    {
                        to: "/blueprint-library/azure-blob-storage/azure-blob-storage-download-files",
                        from: ["/blueprint-library/azure-blob-storage"]
                    },
                    {
                        to: "/blueprint-library/azure-blob-storage/azure-blob-storage-upload-files",
                        from: ["/blueprint-library/azure-blob-storage"]
                    },
                    {
                        to: "/blueprint-library/box/box-download-files",
                        from: ["/blueprint-library/box"]
                    },
                    {
                        to: "/blueprint-library/box/box-upload-files",
                        from: ["/blueprint-library/box"]
                    },
                    {
                        to: "/blueprint-library/data-manipulation/data-manipulation-compare-datasets",
                        from: ["/blueprint-library/data-manipulation"]
                    },
                    {
                        to: "/blueprint-library/dbt-cloud/dbt-cloud-check-run-status",
                        from: ["/blueprint-library/dbt-cloud"]
                    },
                    {
                        to: "/blueprint-library/dbt-cloud/dbt-cloud-download-logs-and-artifacts",
                        from: ["/blueprint-library/dbt-cloud"]
                    },
                    {
                        to: "/blueprint-library/dbt-cloud/dbt-cloud-execute-job",
                        from: ["/blueprint-library/dbt-cloud"]
                    },
                    {
                        to: "/blueprint-library/dbt-cloud/dbt-cloud-execute-job-and-download-results",
                        from: ["/blueprint-library/dbt-cloud"]
                    },
                    {
                        to: "/blueprint-library/dropbox/dropbox-download-files",
                        from: ["/blueprint-library/dropbox"]
                    },
                    {
                        to: "/blueprint-library/dropbox/dropbox-upload-files",
                        from: ["/blueprint-library/dropbox"]
                    },
                    {
                        to: "/blueprint-library/email/email-send-message",
                        from: ["/blueprint-library/email"]
                    },
                    {
                        to: "/blueprint-library/email/email-send-message-conditionally",
                        from: ["/blueprint-library/email"]
                    },
                    {
                        to: "/blueprint-library/email/email-send-message-with-file",
                        from: ["/blueprint-library/email"]
                    },
                    {
                        to: "/blueprint-library/file-manipulation/file-manipulation-compress-files",
                        from: ["/blueprint-library/file-manipulation"]
                    },
                    {
                        to: "/blueprint-library/file-manipulation/file-manipulation-convert-csv",
                        from: ["/blueprint-library/file-manipulation"]
                    },
                    {
                        to: "/blueprint-library/file-manipulation/file-manipulation-decompress-files",
                        from: ["/blueprint-library/file-manipulation"]
                    },
                    {
                        to: "/blueprint-library/fivetran/fivetran-check-sync-status",
                        from: ["/blueprint-library/fivetran"]
                    },
                    {
                        to: "/blueprint-library/fivetran/fivetran-execute-sync",
                        from: ["/blueprint-library/fivetran"]
                    },
                    {
                        to: "/blueprint-library/fivetran/fivetran-execute-sync-and-check-status",
                        from: ["/blueprint-library/fivetran"]
                    },
                    {
                        to: "/blueprint-library/fivetran/fivetran-update-connector",
                        from: ["/blueprint-library/fivetran"]
                    },
                    {
                        to: "/blueprint-library/ftp/ftp-download-files",
                        from: ["/blueprint-library/ftp"]
                    },
                    {
                        to: "/blueprint-library/ftp/ftp-upload-files",
                        from: ["/blueprint-library/ftp"]
                    },
                    {
                        to: "/blueprint-library/google-bigquery/google-bigquery-execute-query",
                        from: ["/blueprint-library/google-bigquery"]
                    },
                    {
                        to: "/blueprint-library/google-bigquery/google-bigquery-store-query-results-as-csv",
                        from: ["/blueprint-library/google-bigquery"]
                    },
                    {
                        to: "/blueprint-library/google-bigquery/google-bigquery-store-query-results-in-google-cloud-storage",
                        from: ["/blueprint-library/google-bigquery"]
                    },
                    {
                        to: "/blueprint-library/google-bigquery/google-bigquery-upload-csv-to-table",
                        from: ["/blueprint-library/google-bigquery"]
                    },
                    {
                        to: "/blueprint-library/google-cloud-storage/google-cloud-storage-download-files",
                        from: ["/blueprint-library/google-cloud-storage"]
                    },
                    {
                        to: "/blueprint-library/google-cloud-storage/google-cloud-storage-upload-files",
                        from: ["/blueprint-library/google-cloud-storage"]
                    },
                    {
                        to: "/blueprint-library/google-drive/google-drive-download-files",
                        from: ["/blueprint-library/google-drive"]
                    },
                    {
                        to: "/blueprint-library/google-drive/google-drive-upload-files",
                        from: ["/blueprint-library/google-drive"]
                    },
                    {
                        to: "/blueprint-library/google-sheets/google-sheets-clear-data-from-sheet",
                        from: ["/blueprint-library/google-sheets"]
                    },
                    {
                        to: "/blueprint-library/google-sheets/google-sheets-download-sheet-to-csv",
                        from: ["/blueprint-library/google-sheets"]
                    },
                    {
                        to: "/blueprint-library/google-sheets/google-sheets-upload-csv-to-sheet",
                        from: ["/blueprint-library/google-sheets"]
                    },
                    {
                        to: "/blueprint-library/http/http-download-file-from-url",
                        from: ["/blueprint-library/http"]
                    },
                    {
                        to: "/blueprint-library/http/http-requests",
                        from: ["/blueprint-library/http"]
                    },
                    {
                        to: "/blueprint-library/microsoft-sql-server/microsoft-sql-server-execute-query",
                        from: ["/blueprint-library/microsoft-sql-server"]
                    },
                    {
                        to: "/blueprint-library/microsoft-sql-server/microsoft-sql-server-store-query-results-as-csv",
                        from: ["/blueprint-library/microsoft-sql-server"]
                    },
                    {
                        to: "/blueprint-library/microsoft-sql-server/microsoft-sql-server-upload-csv-to-table",
                        from: ["/blueprint-library/microsoft-sql-server"]
                    },
                    {
                        to: "/blueprint-library/mysql/mysql-execute-query",
                        from: ["/blueprint-library/mysql"]
                    },
                    {
                        to: "/blueprint-library/mysql/mysql-store-query-results-as-csv",
                        from: ["/blueprint-library/mysql"]
                    },
                    {
                        to: "/blueprint-library/mysql/mysql-upload-csv-to-table",
                        from: ["/blueprint-library/mysql"]
                    },
                    {
                        to: "/blueprint-library/postgresql/postgresql-execute-query",
                        from: ["/blueprint-library/postgresql"]
                    },
                    {
                        to: "/blueprint-library/postgresql/postgresql-store-query-results-as-csv",
                        from: ["/blueprint-library/postgresql"]
                    },
                    {
                        to: "/blueprint-library/postgresql/postgresql-upload-csv-to-table",
                        from: ["/blueprint-library/postgresql"]
                    },
                    {
                        to: "/blueprint-library/sftp/sftp-download-files",
                        from: ["/blueprint-library/sftp"]
                    },
                    {
                        to: "/blueprint-library/sftp/sftp-upload-files",
                        from: ["/blueprint-library/sftp"]
                    },
                    {
                        to: "/blueprint-library/slack/slack-send-message",
                        from: ["/blueprint-library/slack"]
                    },
                    {
                        to: "/blueprint-library/slack/slack-send-message-conditionally",
                        from: ["/blueprint-library/slack"]
                    },
                    {
                        to: "/blueprint-library/slack/slack-send-message-with-file",
                        from: ["/blueprint-library/slack"]
                    },
                    {
                        to: "/blueprint-library/snowflake/snowflake-execute-query",
                        from: ["/blueprint-library/snowflake"]
                    },
                    {
                        to: "/blueprint-library/snowflake/snowflake-store-query-results-as-csv",
                        from: ["/blueprint-library/snowflake"]
                    },
                    {
                        to: "/blueprint-library/snowflake/snowflake-upload-csv-to-table",
                        from: ["/blueprint-library/snowflake"]
                    }
                ],
                createRedirects: function (existingPath) {
                    if (existingPath.contains("airtable#download-table-or-view-to-csv")) {
                        return [
                            "/blueprint-library/airtable/airtable-download-table-or-view-to-csv",
                        ];
                    }
                    if (existingPath.contains("amazon-athena#execute-query")) {
                        return [
                            "/blueprint-library/amazon-athena/amazon-athena-execute-query",
                        ];
                    }
                    if (existingPath.contains("amazon-athena#store-query-results-as-csv")) {
                        return [
                            "/blueprint-library/amazon-athena/amazon-athena-store-query-results-as-csv",
                        ];
                    }
                    if (existingPath.contains("amazon-redshift#execute-query")) {
                        return [
                            "/blueprint-library/amazon-redshift/amazon-redshift-execute-query",
                        ];
                    }
                    if (existingPath.contains("amazon-redshift#store-query-results-as-csv")) {
                        return [
                            "/blueprint-library/amazon-redshift/amazon-redshift-store-query-results-as-csv",
                        ];
                    }
                    if (existingPath.contains("amazon-redshift#upload-csv-to-table")) {
                        return [
                            "/blueprint-library/amazon-redshift/amazon-redshift-upload-csv-to-table",
                        ];
                    }
                    if (existingPath.contains("amazon-s3#download-files")) {
                        return [
                            "/blueprint-library/amazon-s3/amazon-s3-download-files",
                        ];
                    }
                    if (existingPath.contains("amazon-s3#upload-files")) {
                        return [
                            "/blueprint-library/amazon-s3/amazon-s3-upload-files",
                        ];
                    }
                    if (existingPath.contains("azure-blob-storage#download-files")) {
                        return [
                            "/blueprint-library/azure-blob-storage/azure-blob-storage-download-files",
                        ];
                    }
                    if (existingPath.contains("azure-blob-storage#upload-files")) {
                        return [
                            "/blueprint-library/azure-blob-storage/azure-blob-storage-upload-files",
                        ];
                    }
                    if (existingPath.contains("box#download-files")) {
                        return [
                            "/blueprint-library/box/box-download-files",
                        ];
                    }
                    if (existingPath.contains("box#upload-files")) {
                        return [
                            "/blueprint-library/box/box-upload-files",
                        ];
                    }
                    if (existingPath.contains("data-manipulation#compare-datasets")) {
                        return [
                            "/blueprint-library/data-manipulation/data-manipulation-compare-datasets",
                        ];
                    }
                    if (existingPath.contains("dbt-cloud#check-run-status")) {
                        return [
                            "/blueprint-library/dbt-cloud/dbt-cloud-check-run-status",
                        ];
                    }
                    if (existingPath.contains("dbt-cloud#download-logs-and-artifacts")) {
                        return [
                            "/blueprint-library/dbt-cloud/dbt-cloud-download-logs-and-artifacts",
                        ];
                    }
                    if (existingPath.contains("dbt-cloud#execute-job")) {
                        return [
                            "/blueprint-library/dbt-cloud/dbt-cloud-execute-job",
                        ];
                    }
                    if (existingPath.contains("dbt-cloud#execute-job-and-download-results")) {
                        return [
                            "/blueprint-library/dbt-cloud/dbt-cloud-execute-job-and-download-results",
                        ];
                    }
                    if (existingPath.contains("dropbox#download-files")) {
                        return [
                            "/blueprint-library/dropbox/dropbox-download-files",
                        ];
                    }
                    if (existingPath.contains("dropbox#upload-files")) {
                        return [
                            "/blueprint-library/dropbox/dropbox-upload-files",
                        ];
                    }
                    if (existingPath.contains("email#send-message")) {
                        return [
                            "/blueprint-library/email/email-send-message",
                        ];
                    }
                    if (existingPath.contains("email#send-message-conditionally")) {
                        return [
                            "/blueprint-library/email/email-send-message-conditionally",
                        ];
                    }
                    if (existingPath.contains("email#send-message-with-file")) {
                        return [
                            "/blueprint-library/email/email-send-message-with-file",
                        ];
                    }
                    if (existingPath.contains("file-manipulation#compress-files")) {
                        return [
                            "/blueprint-library/file-manipulation/file-manipulation-compress-files",
                        ];
                    }
                    if (existingPath.contains("file-manipulation#convert-csv")) {
                        return [
                            "/blueprint-library/file-manipulation/file-manipulation-convert-csv",
                        ];
                    }
                    if (existingPath.contains("file-manipulation#decompress-files")) {
                        return [
                            "/blueprint-library/file-manipulation/file-manipulation-decompress-files",
                        ];
                    }
                    if (existingPath.contains("fivetran#check-sync-status")) {
                        return [
                            "/blueprint-library/fivetran/fivetran-check-sync-status",
                        ];
                    }
                    if (existingPath.contains("fivetran#execute-sync")) {
                        return [
                            "/blueprint-library/fivetran/fivetran-execute-sync",
                        ];
                    }
                    if (existingPath.contains("fivetran#execute-sync-and-check-status")) {
                        return [
                            "/blueprint-library/fivetran/fivetran-execute-sync-and-check-status",
                        ];
                    }
                    if (existingPath.contains("fivetran#update-connector")) {
                        return [
                            "/blueprint-library/fivetran/fivetran-update-connector",
                        ];
                    }
                    if (existingPath.contains("ftp#download-files")) {
                        return [
                            "/blueprint-library/ftp/ftp-download-files",
                        ];
                    }
                    if (existingPath.contains("ftp#upload-files")) {
                        return [
                            "/blueprint-library/ftp/ftp-upload-files",
                        ];
                    }
                    if (existingPath.contains("google-bigquery#execute-query")) {
                        return [
                            "/blueprint-library/google-bigquery/google-bigquery-execute-query",
                        ];
                    }
                    if (existingPath.contains("google-bigquery#store-query-results-as-csv")) {
                        return [
                            "/blueprint-library/google-bigquery/google-bigquery-store-query-results-as-csv",
                        ];
                    }
                    if (existingPath.contains("google-bigquery#store-query-results-in-google-cloud-storage")) {
                        return [
                            "/blueprint-library/google-bigquery/google-bigquery-store-query-results-in-google-cloud-storage",
                        ];
                    }
                    if (existingPath.contains("google-bigquery#upload-csv-to-table")) {
                        return [
                            "/blueprint-library/google-bigquery/google-bigquery-upload-csv-to-table",
                        ];
                    }
                    if (existingPath.contains("google-cloud-storage#download-files")) {
                        return [
                            "/blueprint-library/google-cloud-storage/google-cloud-storage-download-files",
                        ];
                    }
                    if (existingPath.contains("google-cloud-storage#upload-files")) {
                        return [
                            "/blueprint-library/google-cloud-storage/google-cloud-storage-upload-files",
                        ];
                    }
                    if (existingPath.contains("google-drive#download-files")) {
                        return [
                            "/blueprint-library/google-drive/google-drive-download-files",
                        ];
                    }
                    if (existingPath.contains("google-drive#upload-files")) {
                        return [
                            "/blueprint-library/google-drive/google-drive-upload-files",
                        ];
                    }
                    if (existingPath.contains("google-sheets#clear-data-from-sheet")) {
                        return [
                            "/blueprint-library/google-sheets/google-sheets-clear-data-from-sheet",
                        ];
                    }
                    if (existingPath.contains("google-sheets#download-sheet-to-csv")) {
                        return [
                            "/blueprint-library/google-sheets/google-sheets-download-sheet-to-csv",
                        ];
                    }
                    if (existingPath.contains("google-sheets#upload-csv-to-sheet")) {
                        return [
                            "/blueprint-library/google-sheets/google-sheets-upload-csv-to-sheet",
                        ];
                    }
                    if (existingPath.contains("http#download-file-from-url")) {
                        return [
                            "/blueprint-library/http/http-download-file-from-url",
                        ];
                    }
                    if (existingPath.contains("http#requests")) {
                        return [
                            "/blueprint-library/http/http-requests",
                        ];
                    }
                    if (existingPath.contains("microsoft-sql-server#execute-query")) {
                        return [
                            "/blueprint-library/microsoft-sql-server/microsoft-sql-server-execute-query",
                        ];
                    }
                    if (existingPath.contains("microsoft-sql-server#store-query-results-as-csv")) {
                        return [
                            "/blueprint-library/microsoft-sql-server/microsoft-sql-server-store-query-results-as-csv",
                        ];
                    }
                    if (existingPath.contains("microsoft-sql-server#upload-csv-to-table")) {
                        return [
                            "/blueprint-library/microsoft-sql-server/microsoft-sql-server-upload-csv-to-table",
                        ];
                    }
                    if (existingPath.contains("mysql#execute-query")) {
                        return [
                            "/blueprint-library/mysql/mysql-execute-query",
                        ];
                    }
                    if (existingPath.contains("mysql#store-query-results-as-csv")) {
                        return [
                            "/blueprint-library/mysql/mysql-store-query-results-as-csv",
                        ];
                    }
                    if (existingPath.contains("mysql#upload-csv-to-table")) {
                        return [
                            "/blueprint-library/mysql/mysql-upload-csv-to-table",
                        ];
                    }
                    if (existingPath.contains("postgresql#execute-query")) {
                        return [
                            "/blueprint-library/postgresql/postgresql-execute-query",
                        ];
                    }
                    if (existingPath.contains("postgresql#store-query-results-as-csv")) {
                        return [
                            "/blueprint-library/postgresql/postgresql-store-query-results-as-csv",
                        ];
                    }
                    if (existingPath.contains("postgresql#upload-csv-to-table")) {
                        return [
                            "/blueprint-library/postgresql/postgresql-upload-csv-to-table",
                        ];
                    }
                    if (existingPath.contains("sftp#download-files")) {
                        return [
                            "/blueprint-library/sftp/sftp-download-files",
                        ];
                    }
                    if (existingPath.contains("sftp#upload-files")) {
                        return [
                            "/blueprint-library/sftp/sftp-upload-files",
                        ];
                    }
                    if (existingPath.contains("slack#send-message")) {
                        return [
                            "/blueprint-library/slack/slack-send-message",
                        ];
                    }
                    if (existingPath.contains("slack#send-message-conditionally")) {
                        return [
                            "/blueprint-library/slack/slack-send-message-conditionally",
                        ];
                    }
                    if (existingPath.contains("slack#send-message-with-file")) {
                        return [
                            "/blueprint-library/slack/slack-send-message-with-file",
                        ];
                    }
                    if (existingPath.contains("snowflake#execute-query")) {
                        return [
                            "/blueprint-library/snowflake/snowflake-execute-query",
                        ];
                    }
                    if (existingPath.contains("snowflake#store-query-results-as-csv")) {
                        return [
                            "/blueprint-library/snowflake/snowflake-store-query-results-as-csv",
                        ];
                    }
                    if (existingPath.contains("snowflake#upload-csv-to-table")) {
                        return [
                            "/blueprint-library/snowflake/snowflake-upload-csv-to-table",
                        ];
                    }
                }
            },
        ],
    ],
};
