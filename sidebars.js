module.exports = {
	docs: {
		Overview: [
			"introduction",
			"documentation-usage",
			"glossary",
			"faqs",
			"troubleshooting",
			"changelog",
		],
		"🚀 Getting Started": [
			"getting-started/first-project",
			"getting-started/first-fleet",
			"getting-started/first-vessel-with-code",
		],
		"📚 Reference": [
			"reference/organizations",
			"reference/projects",

			{
				Admin: [
					"reference/admin/billing",
					"reference/admin/usage-dashboard",
					"reference/admin/user-management",
					"reference/admin/user-permissions",
					{
						Integrations: [
							"reference/admin/integrations/integrations-overview",
							"reference/admin/integrations/github-integration",
						],
					},
				],
			},
			{
				Blueprints: [
					"reference/blueprints/blueprints-overview",
					,
					{
						"Library Blueprints": [
							"reference/blueprints/blueprint-library/blueprint-library-overview",
							"reference/blueprints/blueprint-library/match-type",
						],
						"Org Blueprints": [
							"reference/blueprints/org-blueprints/blueprint-variables",
							"reference/blueprints/org-blueprints/blueprint-description",
							"reference/blueprints/org-blueprints/blueprint-preview",
							"reference/blueprints/org-blueprints/visibility",
						],
					},
				],
				Fleets: [
					"reference/fleets/fleets-overview",
					"reference/fleets/visual-editor",
					"reference/fleets/yaml-editor",
					"reference/fleets/version-control",
				],
			},
			"reference/vessels",
			"reference/inputs",
			{
				Code: [
					"reference/code/code-overview",
					"reference/code/write-code",
					"reference/code/upload-code",
					"reference/code/git-connection",
				],
			},
			"reference/arguments",
			{
				"Environment Variables": [
					"reference/environment-variables/environment-variables-overview",
					"reference/environment-variables/shipyard-environment-variables",
				],
				Packages: [
					"reference/packages/external-package-dependencies",
					"reference/packages/system-package-dependencies",
				],
			},
			"reference/notifications",
			"reference/guardrails",
			"reference/credentials",
			{
				Logs: [
					"reference/logs/logs-overview",
					"reference/logs/vessel-logs",
					"reference/logs/fleet-logs",
				],
				Triggers: [
					"reference/triggers/triggers-overview",
					"reference/triggers/on-demand-triggers",
					"reference/triggers/schedule-triggers",
					"reference/triggers/webhook-triggers",
				],
				"Misc Functions": [
					"reference/other-functions/duplication",
					"reference/other-functions/status",
					"reference/other-functions/timestamps-and-timezones",
				],
			},
			"reference/api",
			"reference/shipyard-url-structures",
		],
		"💡 How-Tos": [
			{
				Blueprints: [
					"how-tos/blueprints/create-blueprint",
					"how-tos/blueprints/delete-blueprint",
					"how-tos/blueprints/edit-blueprint",
					"how-tos/blueprints/duplicate-blueprint",
					"how-tos/blueprints/search-for-blueprint",
					"how-tos/blueprints/create-blueprint-variables",
					"how-tos/blueprints/reference-blueprint-variables",
					"how-tos/blueprints/reorder-blueprint-variables",
				],
				Fleets: [
					"how-tos/fleets/create-fleet",
					"how-tos/fleets/delete-fleet",
					"how-tos/fleets/edit-fleet",
					"how-tos/fleets/duplicate-fleet",
					"how-tos/fleets/search-for-fleet",
					"how-tos/fleets/see-all-files",
					"how-tos/fleets/assess-fleet-performance",
				],
				Projects: [
					"how-tos/projects/create-project",
					"how-tos/projects/delete-project",
					"how-tos/projects/edit-project",
				],
				Triggers: [
					"how-tos/triggers/add-schedule-trigger",
					"how-tos/triggers/execute-webhook-trigger",
				],
				Vessels: [
					"how-tos/vessels/build-vessel-code",
					"how-tos/vessels/build-vessel-blueprint",
					"how-tos/vessels/use-dates-in-fields",
					"how-tos/vessels/remove-vessel",
					"how-tos/vessels/edit-vessel",
					"how-tos/vessels/duplicate-vessel",
					"how-tos/vessels/search-for-vessel",
					"how-tos/vessels/assess-vessel-performance",
				],
				Code: ["how-tos/code/download-code"],
				"Environment Variables": [
					"how-tos/environment-variables/access-environment-variables-with-code",
					"how-tos/environment-variables/access-environment-variables-in-ui",
				],
			},
		],
		"🎯 Tutorials": [
			"tutorials/github-vessel",
			"tutorials/non-native-language-vessels",
			"tutorials/referencing-fleet-webhook-parameters",
			"tutorials/making-api-call",
			"tutorials/create-fleets-with-yaml",
			"tutorials/create-blueprint",
			"tutorials/upload-local-file",
			"tutorials/check-status",
		],
		"📦 Library Blueprints": [
			{
				Airtable: [
					"blueprint-library/airtable/airtable-overview",
					"blueprint-library/airtable/airtable-authorization",
					"blueprint-library/airtable/airtable-download-table-or-view-to-csv",
				],
				"Amazon Athena": [
					"blueprint-library/amazon-athena/amazon-athena-overview",
					"blueprint-library/amazon-athena/amazon-athena-authorization",
					"blueprint-library/amazon-athena/amazon-athena-execute-query",
					"blueprint-library/amazon-athena/amazon-athena-store-query-results-as-csv",
				],
				"Amazon Redshift": [
					"blueprint-library/amazon-redshift/amazon-redshift-overview",
					"blueprint-library/amazon-redshift/amazon-redshift-authorization",
					"blueprint-library/amazon-redshift/amazon-redshift-execute-query",
					"blueprint-library/amazon-redshift/amazon-redshift-store-query-results-as-csv",
					"blueprint-library/amazon-redshift/amazon-redshift-upload-csv-to-table",
				],
				"Amazon S3": [
					"blueprint-library/amazon-s3/amazon-s3-overview",
					"blueprint-library/amazon-s3/amazon-s3-authorization",
					"blueprint-library/amazon-s3/amazon-s3-download-files",
					"blueprint-library/amazon-s3/amazon-s3-move-or-rename-files",
					"blueprint-library/amazon-s3/amazon-s3-remove-files",
					"blueprint-library/amazon-s3/amazon-s3-upload-files",
				],
				"Azure Blob Storage": [
					"blueprint-library/azure-blob-storage/azure-blob-storage-overview",
					"blueprint-library/azure-blob-storage/azure-blob-storage-authorization",
					"blueprint-library/azure-blob-storage/azure-blob-storage-download-files",
					"blueprint-library/azure-blob-storage/azure-blob-storage-move-or-rename-files",
					"blueprint-library/azure-blob-storage/azure-blob-storage-remove-files",
					"blueprint-library/azure-blob-storage/azure-blob-storage-upload-files",
				],
				"bit.io": [
					"blueprint-library/bitio/bitio-overview",
					"blueprint-library/bitio/bitio-authorization",
					"blueprint-library/bitio/bitio-execute-query",
					"blueprint-library/bitio/bitio-store-query-results-as-csv",
					"blueprint-library/bitio/bitio-upload-csv-to-table",
				],
				Box: [
					"blueprint-library/box/box-overview",
					"blueprint-library/box/box-authorization",
					"blueprint-library/box/box-download-files",
					"blueprint-library/box/box-upload-files",
				],
				Census: [
					"blueprint-library/census/census-overview",
					"blueprint-library/census/census-authorization",
					"blueprint-library/census/census-trigger-sync",
					"blueprint-library/census/census-check-sync-status",
				],
				Databricks: [
					"blueprint-library/databricks/databricks-overview",
					"blueprint-library/databricks/databricks-authorization",
					"blueprint-library/databricks/databricks-download-files-from-dbfs",
					"blueprint-library/databricks/databricks-upload-files-to-dbfs",
					"blueprint-library/databricks/databricks-move-or-rename-files-on-dbfs",
					"blueprint-library/databricks/databricks-delete-files-from-dbfs",
				],
				"Data Manipulation": [
					"blueprint-library/data-manipulation/data-manipulation-overview",
					"blueprint-library/data-manipulation/data-manipulation-compare-datasets",
				],
				"dbt Cloud": [
					"blueprint-library/dbt-cloud/dbt-cloud-overview",
					"blueprint-library/dbt-cloud/dbt-cloud-authorization",
					"blueprint-library/dbt-cloud/dbt-cloud-execute-job",
					"blueprint-library/dbt-cloud/dbt-cloud-check-run-status",
					"blueprint-library/dbt-cloud/dbt-cloud-download-logs-and-artifacts",
					"blueprint-library/dbt-cloud/dbt-cloud-execute-job-and-download-results",
				],
				Domo: [
					"blueprint-library/domo/domo-overview",
					"blueprint-library/domo/domo-authorization",
					"blueprint-library/domo/domo-refresh-dataset",
					"blueprint-library/domo/domo-check-refresh-status",
					"blueprint-library/domo/domo-download-card",
					"blueprint-library/domo/domo-download-dataset",
					"blueprint-library/domo/domo-upload-csv-as-dataset",
				],
				Dropbox: [
					"blueprint-library/dropbox/dropbox-overview",
					"blueprint-library/dropbox/dropbox-authorization",
					"blueprint-library/dropbox/dropbox-download-files",
					"blueprint-library/dropbox/dropbox-upload-files",
				],
				Email: [
					"blueprint-library/email/email-overview",
					"blueprint-library/email/email-authorization",
					"blueprint-library/email/email-send-message",
					"blueprint-library/email/email-send-message-conditionally",
					"blueprint-library/email/email-send-message-with-file",
					"blueprint-library/email/email-troubleshooting",
				],
				"File Manipulation": [
					"blueprint-library/file-manipulation/file-manipulation-overview",
					"blueprint-library/file-manipulation/file-manipulation-compress-files",
					"blueprint-library/file-manipulation/file-manipulation-decompress-files",
					"blueprint-library/file-manipulation/file-manipulation-convert-csv",
				],
				Fivetran: [
					"blueprint-library/fivetran/fivetran-overview",
					"blueprint-library/fivetran/fivetran-authorization",
					"blueprint-library/fivetran/fivetran-execute-sync",
					"blueprint-library/fivetran/fivetran-check-sync-status",
					"blueprint-library/fivetran/fivetran-execute-sync-and-check-status",
					"blueprint-library/fivetran/fivetran-update-connector",
				],
				FTP: [
					"blueprint-library/ftp/ftp-overview",
					"blueprint-library/ftp/ftp-authorization",
					"blueprint-library/ftp/ftp-download-files",
					"blueprint-library/ftp/ftp-move-or-rename-files",
					"blueprint-library/ftp/ftp-remove-files",
					"blueprint-library/ftp/ftp-upload-files",
				],
				"Google BigQuery": [
					"blueprint-library/google-bigquery/google-bigquery-overview",
					"blueprint-library/google-bigquery/google-bigquery-authorization",
					"blueprint-library/google-bigquery/google-bigquery-execute-query",
					"blueprint-library/google-bigquery/google-bigquery-store-query-results-in-google-cloud-storage",
					"blueprint-library/google-bigquery/google-bigquery-store-query-results-as-csv",
					"blueprint-library/google-bigquery/google-bigquery-upload-csv-to-table",
				],
				"Google Cloud Storage": [
					"blueprint-library/google-cloud-storage/google-cloud-storage-overview",
					"blueprint-library/google-cloud-storage/google-cloud-storage-authorization",
					"blueprint-library/google-cloud-storage/google-cloud-storage-download-files",
					"blueprint-library/google-cloud-storage/google-cloud-storage-move-or-rename-files",
					"blueprint-library/google-cloud-storage/google-cloud-storage-remove-files",
					"blueprint-library/google-cloud-storage/google-cloud-storage-upload-files",
				],
				"Google Drive": [
					"blueprint-library/google-drive/google-drive-overview",
					"blueprint-library/google-drive/google-drive-authorization",
					"blueprint-library/google-drive/google-drive-download-files",
					"blueprint-library/google-drive/google-drive-upload-files",
				],
				"Google Sheets": [
					"blueprint-library/google-sheets/google-sheets-overview",
					"blueprint-library/google-sheets/google-sheets-authorization",
					"blueprint-library/google-sheets/google-sheets-download-sheet-to-csv",
					"blueprint-library/google-sheets/google-sheets-upload-csv-to-sheet",
					"blueprint-library/google-sheets/google-sheets-clear-data-from-sheet",
				],
				Hex: [
					"blueprint-library/hex/hex-overview",
					"blueprint-library/hex/hex-authorization",
					"blueprint-library/hex/hex-run-project",
					"blueprint-library/hex/hex-check-run-status",
				],
				Hightouch: [
					"blueprint-library/hightouch/hightouch-overview",
					"blueprint-library/hightouch/hightouch-authorization",
					"blueprint-library/hightouch/hightouch-trigger-sync",
					"blueprint-library/hightouch/hightouch-check-sync-status",
				],
				HTTP: [
					"blueprint-library/http/http-overview",
					"blueprint-library/http/http-requests",
					"blueprint-library/http/http-download-file-from-url",
				],
				"Microsoft SQL Server": [
					"blueprint-library/microsoft-sql-server/microsoft-sql-server-overview",
					"blueprint-library/microsoft-sql-server/microsoft-sql-server-authorization",
					"blueprint-library/microsoft-sql-server/microsoft-sql-server-execute-query",
					"blueprint-library/microsoft-sql-server/microsoft-sql-server-store-query-results-as-csv",
					"blueprint-library/microsoft-sql-server/microsoft-sql-server-upload-csv-to-table",
				],
				Looker: [
					"blueprint-library/looker/looker-overview",
					"blueprint-library/looker/looker-authorization",
					"blueprint-library/looker/looker-create-sql-runner-query",
					"blueprint-library/looker/looker-download-dashboard-as-file",
					"blueprint-library/looker/looker-download-look-as-file",
					"blueprint-library/looker/looker-download-sql-query-as-file",
				],
				Mode: [
					"blueprint-library/mode/mode-overview",
					"blueprint-library/mode/mode-authorization",
					"blueprint-library/mode/mode-trigger-report-refresh",
					"blueprint-library/mode/mode-check-run-status",
					"blueprint-library/mode/mode-download-report-as-file",
				],
				MySQL: [
					"blueprint-library/mysql/mysql-overview",
					"blueprint-library/mysql/mysql-authorization",
					"blueprint-library/mysql/mysql-execute-query",
					"blueprint-library/mysql/mysql-store-query-results-as-csv",
					"blueprint-library/mysql/mysql-upload-csv-to-table",
				],
				PostgreSQL: [
					"blueprint-library/postgresql/postgresql-overview",
					"blueprint-library/postgresql/postgresql-authorization",
					"blueprint-library/postgresql/postgresql-execute-query",
					"blueprint-library/postgresql/postgresql-store-query-results-as-csv",
					"blueprint-library/postgresql/postgresql-upload-csv-to-table",
				],
				RudderStack: [
					"blueprint-library/rudderstack/rudderstack-overview",
					"blueprint-library/rudderstack/rudderstack-authorization",
					"blueprint-library/rudderstack/rudderstack-trigger-sync",
					"blueprint-library/rudderstack/rudderstack-check-sync-status",
				],
				SFTP: [
					"blueprint-library/sftp/sftp-overview",
					"blueprint-library/sftp/sftp-authorization",
					"blueprint-library/sftp/sftp-delete-files",
					"blueprint-library/sftp/sftp-download-files",
					"blueprint-library/sftp/sftp-move-or-rename-files",
					"blueprint-library/sftp/sftp-upload-files",
				],
				"Shipyard API": [
					"blueprint-library/shipyard-api/shipyard-api-overview",
					"blueprint-library/shipyard-api/shipyard-api-authorization",
					"blueprint-library/shipyard-api/shipyard-api-export-logs",
				],
				Slack: [
					"blueprint-library/slack/slack-overview",
					"blueprint-library/slack/slack-authorization",
					"blueprint-library/slack/slack-send-message",
					"blueprint-library/slack/slack-send-message-conditionally",
					"blueprint-library/slack/slack-send-message-with-file",
					"blueprint-library/slack/slack-troubleshooting",
				],
				Snowflake: [
					"blueprint-library/snowflake/snowflake-overview",
					"blueprint-library/snowflake/snowflake-authorization",
					"blueprint-library/snowflake/snowflake-execute-query",
					"blueprint-library/snowflake/snowflake-store-query-results-as-csv",
					"blueprint-library/snowflake/snowflake-upload-csv-to-table",
					"blueprint-library/snowflake/snowflake-troubleshooting",
				],
				Tableau: [
					"blueprint-library/tableau/tableau-overview",
					"blueprint-library/tableau/tableau-authorization",
					"blueprint-library/tableau/tableau-trigger-datasource-refresh",
					"blueprint-library/tableau/tableau-trigger-workbook-refresh",
					"blueprint-library/tableau/tableau-check-refresh-status",
					"blueprint-library/tableau/tableau-download-view",
				],
			},
		],
		"🗂 Data Packages": [
			{
				"dbt Core": [
					"data-packages/dbt-core/dbt-core-overview",
					"data-packages/dbt-core/dbt-core-set-up-data-warehouse",
					"data-packages/dbt-core/dbt-core-set-up-dbt",
					"data-packages/dbt-core/dbt-core-set-up-shipyard",
					"data-packages/dbt-core/dbt-core-run-and-generate-docs",
				],
				"Great Expectations": [
					"data-packages/great-expectations/great-expectations-blueprint",
				],
			},
		],
	},
};
