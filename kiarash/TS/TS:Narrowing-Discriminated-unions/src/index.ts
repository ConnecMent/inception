interface Base {
  foo: string;
  bar: string;
}

interface A extends Base {
  bazA: string;
}

interface B extends Base {
  bazB: string;
}

type AOrB = A | B;

const aOrB: AOrB = {
  foo: "foo",
  bar: "bar",
  ...(Math.random() > 0.5 ? { bazA: "bazA" } : { bazB: "bazB" }),
};

if ("bazA" in aOrB) {
  console.log("aOrB is an A", aOrB.bazA);
} else {
  console.log("aOrB is a B", aOrB.bazB);
}

process.exit(0);
