import { home } from "navlinks";
import getLocationCoordinates from "apiService";
import * as helpers from "utilities";
import { radar } from "navlinks";

// set current location name
export async function setCurrentLocationName(location = "Fort Wayne") {
  const locationElement = await helpers.getElementByClassName(home, "currentLocation");
  locationElement.textContent = location;
}

function getLocation() {
  const location = getLocationCoordinates("Fort Wayne");
}

getLocation();
