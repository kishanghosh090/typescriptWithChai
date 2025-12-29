function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(566);

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 23);
interface Box<T> {
  content: T;
}

const numBox: Box<number> = {
  content: 23,
};
const strBox: Box<string> = {
  content: "23",
};

interface ApiPromise<T> {
  status: number;
  data: T;
}
const res: ApiPromise<{ flav: string }> = {
  status: 200,
  data: {
    flav: "masala",
  },
};
