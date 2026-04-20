import NavigationService from "navService";
import  getLocationCoordinates  from "apiService";
import * as homeContent from "homePage";

const navService = new NavigationService()
navService.initialize();

// toggle side menu when collapsed
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {

  const buttonStyle = window.getComputedStyle(menuButton);

  // ToDo: Fix side menu bug after running this method.

  const sideMenu = document.querySelector('aside');
  let elementStyle = window.getComputedStyle(sideMenu);
  sideMenu.style.display = elementStyle.display === "none" ? sideMenu.style.display = "flex" : sideMenu.style.display = "none";
});
