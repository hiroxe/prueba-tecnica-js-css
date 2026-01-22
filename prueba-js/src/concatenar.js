const capitalize = (str) => {
  if (typeof str !== "string" || !str) return "";

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export default (json) => {
  if (
    !Array.isArray(json) ||
    !json.every((item) => item !== null && typeof item === "object")
  ) {
    return "";
  }

  return json
    .map((item) => {
      return [item.nombre, item.apellido, item.apellido2]
        .filter(Boolean)
        .map(capitalize)
        .join(" ");
    })
    .join("<br>");
};
