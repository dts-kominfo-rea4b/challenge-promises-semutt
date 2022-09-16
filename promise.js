const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (mood) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const concateJson = theaterIXX.concat(theaterVGC);
  let totalMood = 0;

  for (i = 0; i < concateJson.length; i++) {
    if (concateJson[ i ].hasil == mood) {
      totalMood += 1;
    }
  }

  return totalMood;
};

module.exports = {
  promiseOutput,
};
