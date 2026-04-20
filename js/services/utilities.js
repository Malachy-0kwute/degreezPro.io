export { getElementByClassName };

function getElementByClassName(page, className) {

  return fetch(page)
  .then(response => response.text())
  .then(() => document.getElementsByClassName(className)[0]);
}
