// closure and high order function

function say(input) {
  const wording = input;

  return (count) => {
    for (i = 0; i < count; i++) {
      console.log(`say ${wording}`);
    }
  };
}

const sayHi = say("Hi");
const sayYo = say("Yo");

sayHi(3);
sayYo(2);
