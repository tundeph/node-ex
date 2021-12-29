const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./content/subfolder/test.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const start = async () => {
  try {
    const don = await getText("./content/subfolder/test.txt");
    const donDid = await getText("./content/subfolder/write.txt");
    console.log(don, donDid);
  } catch (error) {
    console.log(error);
  }
};

start();
