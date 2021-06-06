//Transforms the user input to "first letter uppercase"-format.
const firstUpper = (cityName) => {
  if (typeof cityName !== "string") return "";
  return cityName
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join(" ");
};

export default firstUpper;
