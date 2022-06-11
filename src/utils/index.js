const fs = require("fs");
const path = require("path");

const getDataFromFile = (fileName) => {
  const filePath = path.join(__dirname, "../data", `${fileName}.json`);

  const dataFromFile = fs.readFileSync(filePath, "utf8");

  return JSON.parse(dataFromFile);
};

const writeDataToFile = (fileName, data) => {
  const filePath = path.join(__dirname, "../data", `${fileName}.json`);

  fs.writeFileSync(filePath, JSON.stringify(data));
};

const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );

module.exports = {
  getDataFromFile,
  writeDataToFile,
  getPayloadWithValidFieldsOnly,
};
