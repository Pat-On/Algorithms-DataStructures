var capitalizeTitle = function (title) {
  return title
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word.length > 2) {
        word = word[0].toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
};

console.log(capitalizeTitle("capiTalIze tHe titLe"));
