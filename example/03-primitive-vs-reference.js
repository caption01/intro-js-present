// primitive vs reference

// primitive = number, string, boolean, null, undefine, symbols
// reference = object, array, function, ..etc

function process(a, b, c) {
  a = 3;

  b.push("foo");

  c.first = false;
}

function main() {
  const a = 4;
  const b = ["eeny", "miny", "mo"];
  const c = { first: true };

  process(a, b, c);

  console.log("result a", a);
  console.log("result b", b);
  console.log("result c", c);
}

main();
