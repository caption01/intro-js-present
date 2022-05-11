// js thread model

// setTimeout(() => {
//   console.log("i am Zero");
// }, 0);

function run() {
  setTimeout(() => {
    console.log("i am Zero");
  }, 0);

  setTimeout(() => {
    console.log("i am delayed");
  }, 1500);

  console.log("i am first");
}

run();
