const delay = (interval) => {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
};

const connection = () => {
  return new Promise((resolve, reject) => {
    var state = 1;
    if (state == 1) {
      resolve();
    } else {
      reject();
    }
  });
};

function a() {
  console.log("1");
}

function b() {
  console.log("2");
}

function c() {
  console.log("end");
}

async function go() {
  //   a();
  //   await delay(1000);
  //   b();
  //   await delay(1000);
  //   c();
  //   await delay(1000);

  await connection()
    .then(() => {
      console.log("ok a done");
    })
    .catch(() => {
      console.log("something wrong");
    });

  a();
  await connection()
    .then(() => {
      console.log("ok b done");
    })
    .catch(() => {
      console.log("something wrong");
    });
  b();
  await connection()
    .then(() => {
      console.log("ok c done");
    })
    .catch(() => {
      console.log("something wrong");
    });
  c();
}

go();
