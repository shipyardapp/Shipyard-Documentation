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
				],
				Box: [
					"blueprint-library/box/box-overview",
					"blueprint-library/box/box-authorization",
				],
				"Data Manipulation": [
					"blueprint-library/data-manipulation/data-manipulation-overview",
				],
				"dbt Cloud": [
					"blueprint-library/dbt-cloud/dbt-cloud-overview",
					"blueprint-library/dbt-cloud/dbt-cloud-authorization",
				],
				Dropbox: [
					"blueprint-library/dropbox/dropbox-overview",
					"blueprint-library/dropbox/dropbox-authorization",
				],
				Email: [
					"blueprint-library/email/email-overview",
					"blueprint-library/email/email-authorization",
				],
				"File Manipulation": [
					"blueprint-library/file-manipulation/file-manipulation-overview",
				],
				Fivetran: [
					"blueprint-library/fivetran/fivetran-overview",
					"blueprint-library/fivetran/fivetran-authorization",
				],
				FTP: [
					"blueprint-library/ftp/ftp-overview",
					"blueprint-library/ftp/ftp-authorization",
				],
				"Google BigQuery": [
					"blueprint-library/google-bigquery/google-bigquery-overview",
					"blueprint-library/google-bigquery/google-bigquery-authorization",
				],
				"Google Cloud Storage": [
					"blueprint-library/google-cloud-storage/google-cloud-storage-overview",
					"blueprint-library/google-cloud-storage/google-cloud-storage-authorization",
				],
			},
		],
	},
};
