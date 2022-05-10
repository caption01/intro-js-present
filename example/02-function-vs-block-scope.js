// scope

function run() {
  let fruit = 'orange'
  const price = 100

  if (true) {
    let fruit = 'apple'

    console.log(`in side... ${fruit} is ${price}`);
  }

  console.log(`out side... ${fruit} is ${price}`);
}

run();
