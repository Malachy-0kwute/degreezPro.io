import { homepage } from "navlinks";

export default class NavigationService {

  constructor() {
    const menuBtns = document.querySelectorAll('.side-nav-menu-button');
    menuBtns.forEach(element => {
      element.addEventListener('click', onclick);
    });
  }

  navigateToPage(page) {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (xhttp.status === 200) {
            document.getElementById("page-content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", page);
    xhttp.send();
  }

  initialize() {
    // document.getElementById('homepage-menu-btn').classList.add('side-nav-menu-button-selected');
    document.getElementById('homepage-menu-btn').click();

    this.navigateToPage(homepage)
  }
  

}

function onclick(e) {

  document.querySelectorAll('.side-nav-menu-button').forEach(element => {
    element.classList.remove('side-nav-menu-button-selected');
  });

  updateUICurrentMenu(e.target);
  // mark menu btn as selected in UI
  // navigate to page requested
}

function updateUICurrentMenu(menuButton) {
  
  menuButton.classList.add('side-nav-menu-button-selected');
  // menuButton.style.backgroundColor = '';
  // menuButton.style.cololr = '';

}