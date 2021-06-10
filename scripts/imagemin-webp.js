/* eslint-disable */

const fs = require("fs");
const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

const imageminOptions = {
  plugins: [imageminWebp()],
};

process.argv.slice(2).map(async (input) => {
  try {
    const files = await imagemin([input], imageminOptions);
    await Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            fs.writeFile(
              input.replace(/\.[^\.]+$/, ".webp"),
              file.data,
              (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              }
            );
          })
      )
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
