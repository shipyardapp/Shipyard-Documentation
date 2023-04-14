---
id: use-dates-in-fields
title: How to Insert a Date into any Field
hide_title: true
description: Quick how-to guide to insert a date into a field.
keywords:
  - dates
  - vessel
  - timestamp
---

# How to Insert a Date into any Field

## Overview

When you are sending a report to a stakeholder or automate uploading a file, you may want to include the current date or time in the file name to let your stakeholder know when the report was ran. 

## Steps

1. Navigate to a Vessel with a field that you want to include a date.
2. In the field, [reference the Shipyard environment variables](how-tos/../../environment-variables/access-environment-variables-in-ui.md) related to the Fleet or Vessel's Start Time. A full list of Shipyard environment variables can be found [here](../../reference/environment-variables/shipyard-environment-variables.md).

**Ex.**  `${SHIPYARD_FLEET_START_TIME_YEAR}-${SHIPYARD_FLEET_START_TIME_MONTH}-${SHIPYARD_FLEET_START_TIME_DAY}`. This will return a string with year-month-date. Feel free to add any other information before or after the date setup, but never inside the `${}` environment variable reference.

:::info Pro-Tip
If you need to reference the file name again downstream, we recommend using FLEET_START_TIME variables because these times will be unchanging throughout the current run.

If you want the time to be different for every Vessel, use the VESSEL_START_TIME variables. This will require you to use [regex match](../../reference/blueprints/blueprint-library/match-type.md#regex-match) to find the file name downstream in the same Fleet.
:::

## Other Date Examples
Here are some other general use-cases:

| Example Output   | Field Entry                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| report_09-21-2022.csv       | report\_`${SHIPYARD_VESSEL_START_TIME_MONTH}`-`${SHIPYARD_VESSEL_START_TIME_DAY}`-`${SHIPYARD_VESSEL_START_TIME_YEAR}`.csv                                                                         |
| 2022/09/report.csv          | `${SHIPYARD_VESSEL_START_TIME_YEAR}`/`${SHIPYARD_VESSEL_START_TIME_MONTH}`/report.csv                                                                                                       |
| 1663769254_report.csv       | `${SHIPYARD_VESSEL_START_TIME_EPOCH}`\_report.csv                                                                                                                                              |
| report_09-21-2022_14:07.csv | report\_`${SHIPYARD_VESSEL_START_TIME_MONTH}`-`${SHIPYARD_VESSEL_START_TIME_DAY}`-`${SHIPYARD_VESSEL_START_TIME_YEAR}`\_`${SHIPYARD_VESSEL_START_TIME_HOUR}`:`${SHIPYARD_VESSEL_START_TIME_MINUTE}` |
| report(14:07:34).csv        | report(`${SHIPYARD_VESSEL_START_TIME_HOUR}`:`${SHIPYARD_VESSEL_START_TIME_MINUTE}`:`${SHIPYARD_VESSEL_START_TIME_SECOND}`).csv 

<div dangerouslySetInnerHTML={{ __html: `<div style="position: relative; padding-bottom: calc(66.66666666666666% + 41px); height: 0;"><iframe src="https://demo.arcade.software/Nyw0QeB25kX2n4NTlqLP?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;" title="How to Insert a Date into any Field"></iframe></div>` }} />

