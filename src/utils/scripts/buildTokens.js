const { choices, decisions } = require("../tokens.ts")
const fs = require('fs');

const toKebab = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

const transformTokens = (parentKey, object) => {
  const objKeys = Object.keys(object);

  return objKeys.reduce((prev, objKey) => {
    const value = object[objKey];

    const tokenProp = parentKey ? `${parentKey}-${objKey}` : objKey;
    if (typeof value === 'object') {
      return `${prev}
      ${transformTokens(`${toKebab(tokenProp)}`, value)}`
    }


    return `${prev}
    --${parentKey}-${objKey}: ${value};`
  }, '')

}


const BuildCustomProperties = () => {


  const customProperties = `${transformTokens(null, choices)} 
  ${transformTokens(null, decisions)}`

  const data = `:root {
    ${customProperties}
  }
  `

  fs.writeFile("src/public/tokens.css", data, "utf-8", (err) => {
    if (err) throw err;
    console.log('The tokens has been saved!');
  });
}


BuildCustomProperties();