// type coercion in js

function stringCoercion() {
  console.log("---String Coercion---");

  console.log("1" + 2);
  console.log(2 + "1" + true);
  console.log("12" + undefined);
  console.log("12" + null);
  console.log("12" + NaN);

  const result = "12" + NaN;
  console.log(typeof result);
}

function numberCoercion() {
  console.log("---Number Coercion---");

  console.log("12" - 2);
  console.log("2" * 2);
  console.log("10" / 2);
  console.log("10" % 2);
}

stringCoercion();
numberCoercion();
