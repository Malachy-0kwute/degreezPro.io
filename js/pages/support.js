import { support } from "navlinks";
import * as helpers from "utilities";

let btn = await helpers.getElementByClassName(support, "contact-us-send-button");

btn.addEventListener('click', () => {
  console.log("Contact Us Send Button Clicked:", btn);
});