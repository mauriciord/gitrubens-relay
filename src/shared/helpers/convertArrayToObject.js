const convertArrayToObject = (array, key) =>
  array.reduce((acc, curr) => ((acc[curr[key]] = curr), acc), {});

export default convertArrayToObject;
