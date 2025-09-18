function crypto(password) {
  const passArr = password.split("");
  const part1 = passArr.slice(0, passArr.length / 2).reverse();
  const part2 = passArr.slice(passArr.length / 2).reverse();
  const temp = part2[part2.length / 2];
  part2[part2.length / 2] = part2[part2.length / 2 - 1];
  part2[part2.length / 2 - 1] = temp;
  return part1.concat(part2).join("");
}

function check(cryptoPassword, password) {
  return cryptoPassword === crypto(password);
}

console.log(crypto("password"));
console.log(check("ssapdorw", "password"));
console.log(check("ssapdorw", "word"));
