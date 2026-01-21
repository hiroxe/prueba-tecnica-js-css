const getSortedCharacters = (word) => {
  return word
    .normalize("NFD")
    .toLowerCase()
    .replace(/[\W_]+/g, "")
    .split("")
    .sort()
    .join("");
};

export default (word1, word2) => {
  if (
    !word1 ||
    !word2 ||
    typeof word1 !== "string" ||
    typeof word2 !== "string"
  ) {
    return false;
  }

  const sortedWord1 = getSortedCharacters(word1);
  const sortedWord2 = getSortedCharacters(word2);

  return sortedWord1 === sortedWord2;
};
