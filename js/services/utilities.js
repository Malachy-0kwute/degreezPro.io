export { getElementByClassName };
import { support } from "navlinks";


async function getElementByClassName(page, className) {
  return fetch(support)
      .then(response => response.text())
      .then(htmlString => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const specificElement = doc.querySelector('.contact-us-send-button');
        return specificElement.addEventListener('click', () => {
          console.log("Contact Us Send Button Clicked:", specificElement);
        });
      })
    .catch(err => console.error('Fetch failed:', err));
}

getElementByClassName(support, "contact-us-send-button");