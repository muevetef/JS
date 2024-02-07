/**
 *
 * @param {String} str
 * @returns
 */
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

function textMoney(amount) {
  return `€${amount}`;
}

export { capitalizeWords, textMoney };
