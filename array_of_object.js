const convert = (arr, keyName) => arr.reduce((a, item) => {
    a[item[keyName]] = item;
    return a;
  }, {});
  
  console.log(
    convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
  );