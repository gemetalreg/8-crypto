function crypto(password) {
  const passArr = password.split("");
  return passArr
    .slice(passArr.length / 2)
    .reverse()
    .concat(passArr.slice(0, passArr.length / 2).reverse())
    .join("");
}

function check(cryptoPassword, password) {
  return cryptoPassword === crypto(password);
}

console.log(crypto("password"));
console.log(check("drowssap", "password"));
console.log(check("drowssap", "word"));
