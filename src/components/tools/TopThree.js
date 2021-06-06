//Returns the top three populated citites.
const topThreePopulation = (populations) => {
  let literal = {};
  for (let city in populations.geonames) {
    literal[populations.geonames[city].name] =
      populations.geonames[city].population;
  }

  return Object.keys(literal);
};

export default topThreePopulation;
