declare module "awesome-module" {
  export const foo: () => "hello" | 5;
  export const bar: string;
  export const returnObject: () => { foo: number };
  const _default: {
    foo: string;
    bar: string;
  };

  export default _default;
}
