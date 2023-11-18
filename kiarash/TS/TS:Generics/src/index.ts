type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

type EnumLike<T extends Record<string, T[keyof T]>> = T[keyof T];
