module.exports = function reverse (n) {
   let abs = Math.abs(n);
   let str = abs.toString();
  return str.split('').reverse().join("");
}

