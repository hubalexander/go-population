import axios from "axios";

//fetches name of city matching user input
export const fetchCity = async (geoname) => {
  try {
    const result = await axios(
      `http://api.geonames.org/searchJSON?name=${geoname}&featureClass=P&maxRows=1&username=weknowit`
    );
    return result.data.geonames[0];
  } catch (error) {
    console.log(error);
  }
};

//fetches geodata of country matching user input.
export const fetchCities = async (country) => {
  try {
    const firstResult = await axios(
      `http://api.geonames.org/searchJSON?name="${country}"&maxRows=1&username=weknowit`
    );
    const countryCode = firstResult.data.geonames[0].countryCode;
    const secondUrl = `http://api.geonames.org/searchJSON?country=${countryCode}&featureClass=P&maxRows=3&orderby=population&username=weknowit`;
    const secondResult = await axios(secondUrl);
    return secondResult.data;
  } catch (error) {}
};
