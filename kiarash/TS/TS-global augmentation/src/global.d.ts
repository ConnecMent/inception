declare global {
  interface Window {
    globalObject: {
      foo: string;
      x: () => void;
    };
  }
}

export {};
