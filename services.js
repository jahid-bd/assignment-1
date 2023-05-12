const axios = require('axios');

// <---GET RANDOM NUMBER LOGIC--->
exports.getRandomNum = (start, end) => {
  return Math.floor(Math.random() * (end - start)) + start;
};

// <---CAMEL CASE TO SNNAKE CASE LOGIC--->
const toSnakeCase = (str) => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

// <---GENERATE PERSON LOGIC--->
exports.generatePerson = async (arr) => {
  try {
    const res = await axios.get('https://random-data-api.com/api/v2/users');
    const data = res.data;

    const obj = {};

    arr.forEach((item) => {
      const snakeCaseItem = toSnakeCase(item);

      if (data.hasOwnProperty(snakeCaseItem)) {
        obj[item] = data[snakeCaseItem];

        if (item === 'age') {
          obj.age = getRandomNum(15, 80);
        }
      }
    });

    return obj;
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};
