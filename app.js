import NavigationService from "navService";
import  getLocationCoordinates  from "apiService";
import * as homeContent from "homePage";

const navService = new NavigationService();
navService.initialize();

// toggle side menu when collapsed
document.querySelector('.menu-button').addEventListener('click', () => {
  const sideMenu = document.querySelector('aside');
  sideMenu.classList.toggle('active');
});

// toggle add location popup
document.querySelector('.add-location-button').addEventListener('click', toggleAddLocationPopup);
document.querySelector('.submit').addEventListener('click', toggleAddLocationPopup);

function toggleAddLocationPopup() {
  const sideMenu = document.querySelector('.add-location-popup');
  sideMenu.classList.toggle('active');
}