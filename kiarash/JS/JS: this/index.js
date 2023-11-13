function tryThis() {
  console.log(this);
}

const thisWrapper = {
  tryThis,
};

tryThis.call(thisWrapper);

tryThis();

tryThis.call("hello world!");
