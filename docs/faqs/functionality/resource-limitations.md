---
id: resource-limitations
title: What resource limitations does Shipyard have?
hide_title: true
description: What resource limitations does Shipyard have?
hide_table_of_contents: true
keywords:
  - faq
  - frequently asked questions
  - resource
  - limitations
  - infrastructure
---

# What resource limitations does Shipyard have?

None that you'll likely run into! We designed our platform to scale effectively to handle any data workflow, big or small, without you needing to worry about the infrastructure. Try to build out a proof of concept on our [Developer Plan](../plans/developer-plan.md) and put us to the test!

That said, we do have the following soft limits which can be adjusted on the backend for your organization if you have a great use case.
- Max memory per Vessel is 8GB. 
- Max runtime per Vessel is 4 hours.
- A Vessel can only be retried for up to 24 hours (24 retries, 1 hour delay).
- The max frequency for a schedule is every 5 minutes.

The following are hard limits:
- Network performance goes up to 25 Gbps.

The following are not limited:
- Number of Vessels that can run in parallel.
- Number of Fleets that can run in parallel.
- A Fleets duration is not capped. You could build a Fleet that runs for >24 hours, if desired.
- Amount of data that can be downloaded and processed.