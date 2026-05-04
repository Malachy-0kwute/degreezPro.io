import NavigationService from "navService";
import  getLocationCoordinates  from "apiService";
import * as homeContent from "homePage";
import * as supportContent from "supportPage";
import { support } from "navlinks";


const navService = new NavigationService();
navService.initialize();

function toggleAddLocationPopup() {
  const sideMenu = document.querySelector('.add-location-popup');
  sideMenu.classList.toggle('active');
}

function toggleNotificationPopup() {
  const notificationPopup = document.querySelector('.notification');
  notificationPopup.classList.toggle('active');
}

// toggle side menu when collapsed
document.querySelector('.menu-button').addEventListener('click', () => {
  const sideMenu = document.querySelector('aside');
  sideMenu.classList.toggle('active');
});

// toggle add location popup
document.querySelector('.add-location-button').addEventListener('click', toggleAddLocationPopup);
document.querySelector('.submit').addEventListener('click', toggleAddLocationPopup);

// toggle notification popup
document.querySelector('.notification-button').addEventListener('click', toggleNotificationPopup);
document.querySelector('.notification-button').addEventListener('blur', toggleNotificationPopup); // hide notification popup when it loses focus
