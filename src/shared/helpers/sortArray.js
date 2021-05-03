const sortArray = (array, order = 'asc') =>
  array.sort((a, b) => {
    if (order === 'desc') {
      return b - a;
    }

    return a - b;
  });

export default sortArray;
