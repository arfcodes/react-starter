/**
 * helpers/Content.js
 *
 */

/**
 * stripHtml
 *
 * @param {*} html
 */
export function stripHtml(html) {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

/**
 * getExcerpt
 *
 * @param {*} string
 * @param {*} length
 * @param {*} useWordBoundary
 */
export function getExcerpt(string, length = 200, useWordBoundary = true) {
  const content = stripHtml(string);
  if (content.length <= length) {
    return content;
  }
  const subString = content.substr(0, length - 1); // the original check
  const result = useWordBoundary
    ? subString.substr(0, subString.lastIndexOf(' '))
    : subString;

  return `${result} ...`;
}
