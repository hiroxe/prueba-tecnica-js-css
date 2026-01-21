export default (json) => {
  if (
    !Array.isArray(json) ||
    json.length === 0 ||
    !json.every((item) => item !== null && typeof item === "object")
  ) {
    return "";
  }

  const media =
    json.reduce((acc, item) => acc + (item.edad ?? 0), 0) / json.length;
  return media;
};
