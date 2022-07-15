---
id: faqs
title: Frequently Asked Questions
hide_title: true
description: List of all the most commonly asked questions to the Shipyard support team. If you're wondering something, start here..
keywords:
  - faq
  - frequently asked questions
---

# FAQs

## How can I get access to Shipyard?

If you want to start using Shipyard, you can [sign up for free](https://app.shipyardapp.com/auth/signup?ref=docs-faq). Once you sign up, you'll begin to use your Developer Plan.

## How does the Developer Plan work?
As part of our free Developer Plan, you get to quickly build data pipelines using our orchestration platform with only a few limitations:

- Every month, you will have a total of 10 hours of runtime that you can use. If you go over this amount, your organization will be unable to run any Vessels or Fleets until the next month cycle. You will, however, still have the ability to edit and create Vessels and Fleets.
- You will be only be able to access logs from the last 72 hours. These logs aren't deleted - you can always view more logs on our paid plans.
- Your organization will be unable to use [Webhooks](reference/triggers/webhook-triggers.md).
- Vessels will only be able to run for a maximum of 1 hour.
- You will be unable to invite users to your organization.

Your month cycle is determined based on when your organization is first created. You will receive emails to notify you when you've used too much runtime and when your runtime is reset for the month.

For additional access, subscribe to one of our paid plans in your [billing](reference/admin/billing.md) portal. 

## How do I submit feedback or a feature request?

We love to hear what our users would like to see out of our product. Feel free to reach us at any time through intercom (the chat bubble on the right) or by sending an email directly to [support@shipyardapp.com](mailto:support@shipyardapp.com)

## What programming languages do you support?

We currently natively support the creation of solutions using Python 3.7, Node 14.15, and Bash.

Bash allows us to support any language non-natively, where the right language packages just need to be manually installed by the user as an [external package](reference/requirements/external-package-dependencies.md)

SQL can be used natively with some Blueprints found in the [Blueprint Library](reference/blueprint-library/blueprint-library-overview.md).


In the future, we plan to expand our native language support to R. If you have a language that you would like to see supported, let us know!

## Is Shipyard a low-code tool?

Yes, partially.

Shipyard is not inherently a low-code tool, as it's custom-designed for data teams and developers to launch their custom scripted solutions.

However, the platform allows technical teams to turn coded solutions into low-code Blueprints that can be used by anyone in the organization.

Additionally, we offer a wide variety of Blueprints in our [Blueprint Library](reference/blueprint-library/blueprint-library-overview.md) that don't require minimal code to use.

## What skills do I need to get started with Shipyard?

If you have standard needs to run QA on your data, deliver reports, and send data to external partners, you will be able to get by using only the Blueprints found in our [Blueprint Library](reference/blueprint-library/blueprint-library-overview.md).


If you have proprietary business logic needs, you will likely need at least one technical team member that can initially build solutions for the organization. However, other users of Shipyard are **not** required to know code. We built the platform to allow business users the ability to easily access and take advantage of internally built solutions as [Blueprints](reference/blueprints.md).

Shipyard is a workflow automation platform built for semi-technical team members. As long as you know how to write a little bit of code in SQL, Python, Bash, or Node.js, you can build and launch almost any solution that doesn't need a UI to function. We've made the platform as easy as possible for you to take your existing coding skills, no matter how advanced they are, and solve problems at scale.

If you have an idea of something you want to solve, and you're not sure if it's possible with Shipyard, reach out to us!

## What Technology Stack do you use?

Shipyard was built from the ground-up using Go for all of the backend code.

Our frontend is entirely designed using Node, React.js, and the Ant Design framework.

All of our cloud infrastructure is built on Amazon Web Services.

For a more detailed view at the technology we use across the company, see our [StackShare profile](https://stackshare.io/shipyard/shipyard).

## Why should I use Shipyard over Open-Source Software solutions?

Our team believes in the power of OSS. We even use some of it to build out our own services \(and contribute to some projects in this way\)! However, relying on OSS can present its own challenges when something isn't working. To fix the problem, you'll either have to wait for someone else to prioritize the bug, or develop workarounds on your own.

By making Shipyard a platform that prioritizes payment, we're able to provide customers with a high level of service and reaction time to fixing any bugs that may arise. You'll spend less development time wrangling with setup, troubleshooting, and constant adjustments of infrastructure. If you need a feature to help support your business, we can work with you to build it. We believe that trade-off is worth it for any business serious about implementing automation and using their data pipelines for the long term.

## How can Shipyard access my secure database?

If you need Shipyard to connect to your database which is locked down behind layers of security, a common solution is to whitelist the IP addresses which Shipyard will attempt to access your data from. Any requests coming from Shipyard will come from the following static IPs.

- 54.190.66.63
- 52.42.73.100
- 44.231.239.186
- 44.225.245.149

If you still have trouble with Shipyard being able to access data from internal systems or 3rd parties, reach out to [support](mailto:support@shipyardapp.com).

## How much does Shipyard cost?

Our team plan starts at $50/month and scales based on the number of users in your organization, the overall runtime across all your Vessels/Fleets, and the overall quantity of data that you upload.

The goal with our pricing is to more advantageous for you than running and maintaining your own servers 24/7, even though you might only end up using those servers <10% of the time.

For a more detailed overview, you can look at the [latest plans](https://www.shipyardapp.com/pricing).

To see your organization's usage for the current billing period, you can view the [Usage Dashboard](reference/admin/usage-dashboard.md).

## How do you calculate billable runtime?

Shipyard charges for the cumulative time that your scripts take to run on our infrastructure, regardless of the final status of the job. This is distinct from the duration.

You are not charged for any time delays between [automatic retries](reference/settings/guardrails.md), but each retry will have its own billable runtime associated to it. You are not charged for any time delay between two Vessels in a Fleet. On your invoice, we bill per second, with each Vessel's billable runtime rounded up to the nearest second. Below are a few examples to demonstrate this calculation.

Assumptions:
- Process A always takes 1hr
- Process B always takes 10m
- Process C always takes 1m

Examples:
- You have Process A scheduled to run at 2:00pm and Process B scheduled to run at 4:00pm. Everything will finish running at 4:10pm. Total billable runtime is 1h 10m.
- Shipyard allows you to link together Process A and Process B as a Fleet, so that as soon as Process A completes, Process B will immediately run. If you ran Process A at 2:00pm, Process B will start running at 3:00pm and finish at 3:10pm. Total billable runtime is 1h 10m.
- You run three instances of Process A, in parallel, but still only need to run Process B once after both Process A jobs have completed. If you run Process A three times at 2:00pm, all instances would complete at 3:00pm and kick off Process B which would finish at 3:10pm. Total billable runtime is calculated as 3h 10m, even though the Fleet only had a duration of 1h 10m.
- You run Process C with guardrails to retry itself 10x upon failure, with 5m between each retry. Process C starts running at 8:00am and fails every time. Process C finishes running at 8:55am, with a total billable runtime of 10m.
- You run Process C with guardrails to retry itself 10x upon failure, with 5m between each retry. Process C starts running at 8:00am and succeeds after the 3rd time. Process C finishes running at 8:13am, with a total runtime of 3m.

## How does Shipyard calculate network egress?

Shiyard charges $0.09 per GB of network egress data over the first 50 GB each month.

## What bandwidth is provided by Shipyard?

Shipyard provides network performance up to 25 Gbps.

## Can I use Shipyard to orchestrate external systems?
Yes - absolutely! There are two options to have Shipyard orchestrate work between multiple external systems like Lambda, Cloud Functions, dbt Cloud, and Zapier.

1. You can tell your external system to run a POST command against a Shipyard [webhook](reference/triggers/webhook-triggers.md) to kick off a specific Vessel or Fleet after your external system process has finished. This event-driven workflow results in less runtime and more immediacy between each step.
2. You can set up Vessels in Shipyard that continuously poll another service, looking for a specific response. 
   1. When the Vessel doesn't find the expected response, it errors out. Upon erroring out, the Vessel is retried with a [guardrail](reference/settings/guardrails.md) that retries the job up to 24x, with anywhere from 0-60m between each try.
   2. When the Vessel does find the expected response, it registers as a success. The Vessel then kicks off downstream Vessels in the Fleet.

## How do I change my password?
You can always change your password by filling out the [Forgot My Password](https://app.shipyardapp.com/auth/forgotpassword) form. This will send you a link to a page that lets you set a brand new password for your account.

## I have another question!

Great! We'd love to answer it. [Send us an email](mailto:support@shipyardapp.com), or chat with us by clicking on the chat icon in the bottom right corner.
