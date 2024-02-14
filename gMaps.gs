/**
 * Retrieves the estimated time for traveling between two addresses using the specified transportation mode.
 *
 * @param {string} start_address The starting address in string format.
 * @param {string} end_address The destination address in string format, optional, defaults to the train station.
 * @param {string} transport_mode The transportation mode ("walk", "bike", or "drive"), defaults to walk.
 * @returns {string} The estimated travel time in text format (e.g., "20 minutes", "1 hour").
 */
// Train stations addresses to the towns of interest.
const HOH = "134 Southside Ave, Hastings-On-Hudson, NY 10706"
const LARCHMONT = "1 Railroad Way, Larchmont, NY 10538"

function gMaps(start_address, end_address, transport_mode) {
  // Input validation (enhanced from both responses)

  if (!start_address) {
    throw new Error('Error: Please provide an address');
  }
  // if no end_address is provided, get the train station
  if(!end_address){
    const town = getTown(start_address)
    end_address = getStation(town);
  }
  // set the travel mode, default to walking
  var travel_mode = "";
  switch(transport_mode) {
    case "bike":
      travel_mode = Maps.DirectionFinder.Mode.BICYCLING;
      break;
    case "drive":
      travel_mode = Maps.DirectionFinder.Mode.DRIVING;
      break;
    case "transit":
      travel_mode = Maps.DirectionFinder.Mode.TRANSIT;
      break;
    case "walk":
      travel_mode = Maps.DirectionFinder.Mode.WALKING;
      break;
    default:
      // Default to walking
      travel_mode = Maps.DirectionFinder.Mode.WALKING;
      transport_mode = "walk"
  }
  var directions = Maps.newDirectionFinder()
    .setOrigin(start_address)
    .setDestination(end_address)
    .setMode(travel_mode)
    .getDirections();

  // Extract and return duration (concise and clear)
  return transport_mode +": " + directions.routes[0].legs[0].duration.text;
}

function getTown(address) {
  var village_name_array = address.split(",");
  if (village_name_array.length === 0) {
        throw new Error('Error: Please provide a valid address');
  }
  var village_name = village_name_array[village_name_array.length-1]
  return village_name.replace(" ","")
}

function getStation(town_name) {
  if (town_name == "Hastings-On-Hudson")
  return HOH;
  else if (town_name == "Larchmont")
  return LARCHMONT;
}

function test(){
// // Example usage
var travelTime = gMaps("47 Darwin Ave, Hastings-On-Hudson");
console.log(`${travelTime}`);
// const town = getTown("47 Darwin Ave, Hastings-On-Hudson")
// console.log(`${town}`);
// const station = getStation(town);
// console.log(`${station}`);
// var travelTime = gMaps("47 Darwin Ave, Hastings-On-Hudson", station, "drive");
// console.log(`${travelTime}`);
}
