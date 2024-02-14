# gMaps
A script that invokes google maps from spreadsheet, to calculate the walking, driving, biking distance to a station or between two addresses

# Usage

Retrieves the estimated time for traveling between two addresses using the specified transportation mode.

start_address: The starting address in string format.
end_address: The destination address in string format, optional, defaults to the train station.
transport_mode: The transportation mode ("walk", "bike", or "drive"), defaults to walk.

@returns The estimated travel time in text format (e.g., "20 minutes", "1 hour").

```js
=gMaps($C7)
```
