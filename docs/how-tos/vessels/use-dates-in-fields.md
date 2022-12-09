---
id: use-dates-in-fields
title: How to Insert a Date into any Field
hide_title: true
description: Quick how-to guide to insert a date into a field.
keywords:
  - dates
  - vessel
---

# How to Insert a Date into any Field

## Overview

When you are sending a report to a stakeholder or automate uploading a file, you may want to include the current date or time in the file name to let your stakeholder know when the report was ran. 

## Steps

1. Navigate to a Vessel with a field that you want to include a date.
2. In the field, enter `${SHIPYARD_FLEET_START_TIME_MONTH}-${SHIPYARD_FLEET_START_TIME_DAY}-${SHIPYARD_FLEET_START_TIME_YEAR}`. This will name the file as month-day-year. Feel free to add any other information before or after the date setup.

## Other Date Examples
For a list of all environment variables that you can use to name your files, head [here](../../reference/environment-variables/shipyard-environment-variables.md).

Here are some other general use-cases:

| Example Output   | Field Entry                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 09-12-2022       | ${SHIPYARD_VESSEL_START_TIME_DAY}-${SHIPYARD_VESSEL_START_TIME_MONTH}-${SHIPYARD_VESSEL_START_TIME_YEAR}                                                                         |
| 12/2022          | ${SHIPYARD_VESSEL_START_TIME_MONTH}/${SHIPYARD_VESSEL_START_TIME_YEAR}                                                                                                           |
| 1670443778       | ${SHIPYARD_VESSEL_START_TIME_EPOCH}                                                                                                                                              |
| Wales            | 2.133333                                                                                                                                                                         |
| 09-12-2022_14:07 | ${SHIPYARD_VESSEL_START_TIME_DAY}-${SHIPYARD_VESSEL_START_TIME_MONTH}-${SHIPYARD_VESSEL_START_TIME_YEAR}_${SHIPYARD_VESSEL_START_TIME_HOUR}:${SHIPYARD_VESSEL_START_TIME_MINUTE} |
| 14:07.34         | ${SHIPYARD_VESSEL_START_TIME_HOUR}:${SHIPYARD_VESSEL_START_TIME_MINUTE}.${SHIPYARD_VESSEL_START_TIME_SECOND} 