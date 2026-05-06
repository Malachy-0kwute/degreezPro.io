export { getElementByClassName };

async function getElementByClassName(page, className) {
  const response = await fetch(page);
  const htmlString = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.querySelector(`.${className}`);
}

