function crypto(password) {
  const passArr = password.split("");
  return passArr.reverse().join("");
}

function check(cryptoPassword, password) {
  return cryptoPassword === crypto(password);
}

console.log(crypto("password"));
console.log(check("drowssap", "password"));
console.log(check("drowssap", "word"));
