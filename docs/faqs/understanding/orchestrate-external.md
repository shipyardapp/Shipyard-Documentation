---
id: orchestrate-external
title: Can I use Shipyard to orchestrate external systems?
hide_title: true
description: Can I use Shipyard to orchestrate external systems?
keywords:
  - faq
  - frequently asked questions
  - orchestrate
  - orchestration
  - external
---

## Can I use Shipyard to orchestrate external systems?
Yes - absolutely! There are two options to have Shipyard orchestrate work between multiple external systems like Lambda, Cloud Functions, dbt Cloud, and Zapier.

1. You can tell your external system to run a POST command against a Shipyard [webhook](../../reference/triggers/webhook-triggers.md) to kick off a specific Vessel or Fleet after your external system process has finished. This event-driven workflow results in less runtime and more immediacy between each step.
2. You can set up Vessels in Shipyard that continuously poll another service, looking for a specific response. 
   1. When the Vessel doesn't find the expected response, it errors out. Upon erroring out, the Vessel is retried with a [guardrail](../../reference/guardrails.md) that retries the job up to 24x, with anywhere from 0-60m between each try.
   2. When the Vessel does find the expected response, it registers as a success. The Vessel then kicks off downstream Vessels in the Fleet.