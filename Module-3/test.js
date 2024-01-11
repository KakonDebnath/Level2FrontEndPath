const myAdd = (fun) => {
  return (num) => {
    const result = fun(num);
    console.log(result);
    return result * 5; // fun(num) * 5
  };
};

const add = (num) => {
  return num + 1;
};

console.log("add:", add(5));

const dubule = myAdd(add);
console.log("2", dubule(5));
