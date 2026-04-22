import NavigationService from "navService";
import  getLocationCoordinates  from "apiService";
import * as homeContent from "homePage";

const navService = new NavigationService()
navService.initialize();

// toggle side menu when collapsed
document.querySelector('.menu-button').addEventListener('click', () => {
  const sideMenu = document.querySelector('aside');
  sideMenu.classList.toggle('active');
});


