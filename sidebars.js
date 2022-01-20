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
		"📚 Reference": [
			"reference/organizations",
			"reference/projects",

			{
				"Blueprint Library": [
					"reference/blueprint-library/blueprint-library",
					"reference/blueprint-library/match-type",
				],
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
			"reference/blueprints",
			"reference/vessels",
			"reference/fleets",
			{
				"Code Tab": [
					"reference/code/code-overview",
					"reference/code/write-code",
					"reference/code/upload-code",
					"reference/code/git-connection",
					"reference/code/command",
				],
				"Inputs Tab": [
					"reference/inputs/inputs-overview",
					"reference/inputs/vessel-inputs",
					"reference/inputs/blueprint-variables",
					"reference/inputs/blueprint-description",
					"reference/inputs/blueprint-preview",
				],
				"Requirements Tab": [
					"reference/requirements/environment-variables",
					"reference/requirements/external-package-dependencies",
					"reference/requirements/system-package-dependencies",
				],
				"Settings Tab": [
					"reference/settings/information",
					"reference/settings/notifications",
					"reference/settings/guardrails",
				],
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
					"reference/other-functions/visibility",
				],
			},
			"reference/shipyard-environment-variables",
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
					"how-tos/vessels/delete-vessel",
					"how-tos/vessels/edit-vessel",
					"how-tos/vessels/duplicate-vessel",
					"how-tos/vessels/search-for-vessel",
					"how-tos/vessels/assess-vessel-performance",
				],
				Code: ["how-tos/code/download-code"],
			},
			"how-tos/access-environment-variables",
		],
		"🚀 Tutorials": [
			"tutorials/first-project",
			"tutorials/first-vessel-with-code",
			"tutorials/advanced-code-vessel",
			"tutorials/great-expectations-blueprint",
			"tutorials/dbt-core-blueprint",
			"tutorials/first-fleet",
			"tutorials/non-native-language-vessels",
		],
		"📦 Blueprint Library": [
			"blueprint-library/airtable",
			"blueprint-library/amazon-athena",
			"blueprint-library/amazon-redshift",
			"blueprint-library/amazon-s3",
			"blueprint-library/azure-blob-storage",
			"blueprint-library/box",
			"blueprint-library/data-manipulation",
			"blueprint-library/dbt-cloud",
			"blueprint-library/dropbox",
			"blueprint-library/email",
			"blueprint-library/file-manipulation",
			"blueprint-library/fivetran",
			"blueprint-library/ftp",
			"blueprint-library/google-bigquery",
			"blueprint-library/google-cloud-storage",
			"blueprint-library/google-drive",
			"blueprint-library/google-sheets",
			"blueprint-library/microsoft-sql-server",
			"blueprint-library/mysql",
			"blueprint-library/postgresql",
			"blueprint-library/sftp",
			"blueprint-library/slack",
			"blueprint-library/snowflake",
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
					"blueprint-library/amazon-s3/amazon-s3-upload-files",
				],
				"Azure Blob Storage": [
					"blueprint-library/azure-blob-storage/azure-blob-storage-overview",
					"blueprint-library/azure-blob-storage/azure-blob-storage-authorization",
					"blueprint-library/azure-blob-storage/azure-blob-storage-download-files",
					"blueprint-library/azure-blob-storage/azure-blob-storage-upload-files",
				],
				Box: [
					"blueprint-library/box/box-overview",
					"blueprint-library/box/box-authorization",
					"blueprint-library/box/box-download-files",
					"blueprint-library/box/box-upload-files",
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
				SFTP: [
					"blueprint-library/sftp/sftp-overview",
					"blueprint-library/sftp/sftp-authorization",
					"blueprint-library/sftp/sftp-download-files",
					"blueprint-library/sftp/sftp-upload-files",
				],
				Slack: [
					"blueprint-library/slack/slack-overview",
					"blueprint-library/slack/slack-authorization",
					"blueprint-library/slack/slack-send-message",
					"blueprint-library/slack/slack-send-message-conditionally",
					"blueprint-library/slack/slack-send-message-with-file",
				],
				Snowflake: [
					"blueprint-library/snowflake/snowflake-overview",
					"blueprint-library/snowflake/snowflake-authorization",
					"blueprint-library/snowflake/snowflake-execute-query",
					"blueprint-library/snowflake/snowflake-store-query-results-as-csv",
					"blueprint-library/snowflake/snowflake-upload-csv-to-table",
				],
			},
		],
	},
};
