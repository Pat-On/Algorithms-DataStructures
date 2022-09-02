function anagrams(stringA, stringB) {
  const stringAToLow = stringA.replace(/[^\w]/g, "").toLowerCase();
  const stringBToLow = stringB.replace(/[^\w]/g, "").toLowerCase();

  if (stringAToLow.length !== stringBToLow.length) {
    return false;
  }

  const counter = {};

  for (let i = 0; i < stringAToLow.length; i++) {
    if (!counter[stringAToLow[i]]) {
      counter[stringAToLow[i]] = 1;
    } else {
      counter[stringAToLow[i]]++;
    }
  }

  for (let i = 0; i < stringBToLow.length; i++) {
    if (!counter[stringBToLow[i]] || counter[stringBToLow[i]] === 0) {
      return false;
    } else {
      counter[stringBToLow[i]]--;
    }
  }
  return true;
}

console.log(anagrams("rail safety", "fairy tales") === true);
console.log(anagrams("RAIL! SAFETY!", "fairy tales") === true);
console.log(anagrams("Hi there", "Bye there") === false);
console.log(anagrams("hello", "llohe") === true);
