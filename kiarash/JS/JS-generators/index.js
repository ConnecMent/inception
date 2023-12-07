import all from "it-all";

async function* delayedRandomSource() {
  let max = 5;
  let min = 0;

  while (true) {
    let randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumber = Math.random();

    if (randomNumber > 0.9) {
      return;
    }

    yield new Promise((resolve) => {
      setTimeout(() => {
        resolve(randomNumber);
      }, randomDelay * 1000);
    });
  }
}

let iterateOnGeneratorFn = async (generatorFunction) => {
  let iterator = generatorFunction();

  for await (let value of iterator) {
    console.log("vanilla: ", value);
  }
};

// with vanilla js
iterateOnGeneratorFn(delayedRandomSource);

// with it package
const arr = await all(delayedRandomSource());
console.log("it: ", arr);
