const isStringifiedNumber = (param: string | number): param is string => {
  return typeof param === "string";
};

const numberOfUnknownType = Math.random() > 0.5 ? "5" : 5;

if (isStringifiedNumber(numberOfUnknownType)) {
  console.log("5 multiplied by 11: ", numberOfUnknownType.repeat(2));
} else {
  console.log("5 multiplied by 11: ", numberOfUnknownType * 11);
}

process.exit(0);
