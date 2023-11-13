type ArrayElement<T> = T extends string[]
  ? string
  : T extends string
  ? never
  : unknown;

type EnumLike_v1<T extends Record<string, string | number>> = T[keyof T];

type EnumLike_v2<T extends { a: number; b: string }> = T[keyof T];
