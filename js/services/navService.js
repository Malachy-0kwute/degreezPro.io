import { home } from "navlinks";
import { alerts } from "navlinks";
import { cities } from "navlinks";
import { radar } from "navlinks";
import { settings } from "navlinks";
import { support } from "navlinks";

export default class NavigationService {

  constructor() {
    const menuBtns = document.querySelectorAll('.side-nav-menu-button');
    menuBtns.forEach(element => {
      element.addEventListener('click', onclick);
    });

    document.getElementById('setting-btn').addEventListener('click', onclick);
  }

  navigateToPage(page, toggleMenu = true) {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (xhttp.status === 200) {
          document.getElementById("page-content").innerHTML = this.responseText;

          // Hide side menu if we're in toggle mode
          const menuBtn = document.querySelector('.menu-button');
          let menuBtnStyle = window.getComputedStyle(menuBtn);

          const sideMenu = document.querySelector('aside');
          let sideMenuStyle = window.getComputedStyle(sideMenu);

          if (sideMenuStyle.display == 'flex' && page == settings) {
            menuBtn.click();
          }
          
          if (menuBtnStyle.display == 'flex' && toggleMenu == true && page != settings) {
            menuBtn.click();  
          }
        }
    };
    xhttp.open("GET", page, true);
    xhttp.send();    
  }

  initialize() {
    // document.getElementById('homepage-menu-btn').classList.add('side-nav-menu-button-selected');
    document.getElementById('homepage-menu-btn').click();

    // Set default page to home
    this.navigateToPage(home, false);
  }
  
}

function onclick(e) {

  // set page title to menu btn text
  document.getElementById('page-title').innerText = e.target.innerText;

   // create instance of nav service to navigate to page
  const navService = new NavigationService();

  // if settings btn is clicked, navigate to settings page and do nothing else
  if (e.target.id === 'setting-btn') {
    // navigate to settings page
    navService.navigateToPage(settings);

     // set page title to settings
    setPageTitle('Settings');
    return;
  }
  
  // unselect all menu buttons in UI
  document.querySelectorAll('.side-nav-menu-button').forEach(element => {
    element.classList.remove('side-nav-menu-button-selected');
  });

  // mark menu btn as selected in UI
  setActiveNavItem(e.target);

  // navigate to page based on menu btn text
  pageFilter(e.target.innerText, navService);

  // set page title to menu btn text
  setPageTitle(e.target.innerText);
}

function setPageTitle(title) {
  document.getElementById('page-title').innerText = title;
}

function setActiveNavItem(menuButton) {
  
  menuButton.classList.add('side-nav-menu-button-selected');
  menuButton.style.backgroundColor = '';
  menuButton.style.cololr = '';
}

function pageFilter(page, navService) {
  switch (page.toLowerCase()) {
    case 'home':
      navService.navigateToPage(home);
      break;
    case 'alerts':
      navService.navigateToPage(alerts);
      break;
    case 'cities':
      navService.navigateToPage(cities);
      break;
    case 'radar':
      navService.navigateToPage(radar);
      break;
    case 'support':
      navService.navigateToPage(support);
      break;
  }
}