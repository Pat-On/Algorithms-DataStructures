function breaker() {
  let counter = 1;
  function printer() {
    let str = "\n" + `${"*".repeat(30)} Solution ${counter} ${"*".repeat(30)}`;
    console.log(str);
    counter++;
  }

  return printer;
}

module.exports = breaker;
