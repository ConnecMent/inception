function tryThis() {
  console.log(this);
}

const thisWrapper = {
  tryThis,
};

let boundTryThis = tryThis.bind(thisWrapper);

boundTryThis();

tryThis();

tryThis.call("hello world!");
