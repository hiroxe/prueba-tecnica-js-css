const capitalize = (str) => {
  if (typeof str !== "string" || !str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
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
