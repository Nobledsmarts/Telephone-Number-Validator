function telephoneCheck(str) {
let regex = /^(1?\s?)?(\(?\d{3}\)?[-\s]?){2}\d{4}$/;

const hasMatchingBrackets = (str) => {
  let hasLeftBracket = str.indexOf("(") > -1;
  let hasRightBracket = str.indexOf(")") > -1;
  
  return hasLeftBracket ? hasRightBracket : (hasRightBracket ? hasLeftBracket : true)

}

  return regex.test(str) && hasMatchingBrackets(str);
}

console.log(telephoneCheck("1 555)-555-5555"));
