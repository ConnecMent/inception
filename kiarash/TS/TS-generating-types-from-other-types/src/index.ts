interface A {
  foo: string;
  foo2: number;
  bar: number;
  toBeRemoved: any;
}

type ConvertorA<T, U> = {
  +readonly [Property in keyof T as Property extends U
    ? never
    : T[Property] extends number
    ? `is${Capitalize<string & Property>}`
    : T[Property] extends string
    ? `get${Capitalize<string & Property>}`
    : never]: () => T[Property] extends number
    ? boolean
    : T[Property] extends string
    ? string
    : never;
};

type ConvertedA = ConvertorA<A, "toBeRemoved">;

type B = "world" | "universe" | "connecment";

type ConvertorB<T, U> = `${string & U} ${string & T}`;
