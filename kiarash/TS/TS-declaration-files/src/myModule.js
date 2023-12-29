export const foo = () => (Math.random() > 0.5 ? "hello" : 5);

export const bar = "hello world";

export const returnObject = () => ({
  foo: 2,
});

console.log(returnObject());

export default {
  foo: "foo",
  bar: "bar",
};
