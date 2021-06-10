var currentTime = 0;

var output = ["a", "b", "c"];

const delay = (interval) => {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
};

let task = {
  a: {
    action: async () => {
      console.log("hey 1");
    },
  },
  b: {
    action: async () => {
      console.log("hey 2");
    },
  },
};

async function callTask(t) {
  if (!task[t]) {
    return;
  }
  task[t].action();
}

(async () => {
  // for (i = 0; i < output.length; i++) {
  //   console.log(output[i]);
  //   callTask(output[i]);
  // }

  output.forEach((item) => {
    console.log(item);
    callTask(item);
  });
})();

var dudu = new Object();
dudu.age = "29";
dudu.skinColor = "light yellow";

console.log(dudu.age);
console.log(dudu.skinColor);

var awei = {
  age: "39",
  skinColor: "light tent",
  behave: async () => {
    console.log("fall in love");
  },
};

console.log(awei.age);
console.log(awei.skinColor);

awei.behave();

for (var i in dudu) {
  console.log(i);
}

function Book(title, href, imageUri, description) {
  this.title = title;
  this.href = href;
  this.imageUri = imageUri;
  this.description = description;
  this.size = "a4";
}

var topSeller = new Book(
  "go to underworld",
  "sn0009",
  "https://github.com",
  "good shit"
);

var topSeller2 = new Book("go to ", "qa2222", "https://github.com", "good ");

console.log(topSeller);
console.log(topSeller2);

// (async () => {
//   while (true) {
//     await delay(1000);
//     currentTime++;
//     if (currentTime >= 10) {
//       currentTime = 0;
//     }
//     console.log(currentTime);
//     callTask(currentTime);
//   }
// })();

//作業：將時間數值換成array的字串去對task物件做action的控制
//做業2：promise的用法以及async func特性
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//複習：callback function, non-blocking, blocking

//週四： class , constructor, object , prototype

// var go = async function () {
//   await delay(5000);
//   console.log("after 1 sec");
// };

// (async () => {
//   while (true) {
//     await delay(1000);
//     console.log("1000");
//     await delay(2000);
//     console.log("2000");
//   }
// })();
