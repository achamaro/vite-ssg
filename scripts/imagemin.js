/* eslint-disable */
/**
 * "lint-staged": {
 *   "*.{png,jpeg,jpg,gif,svg,webp}": "node scripts/imagemin.mjs"
 * }
 */

const fs = require("fs");
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminSvgo = require("imagemin-svgo");
const imageminWebp = require("imagemin-webp");
const { extendDefaultPlugins } = require("svgo");

const imageminOptions = {
  plugins: [
    imageminMozjpeg({
      quality: 50,
    }),
    imageminPngquant({
      speed: 1,
      quality: [0.1, 0.2],
    }),
    imageminGifsicle(),
    imageminSvgo({
      plugins: extendDefaultPlugins([{ name: "removeViewBox", active: false }]),
    }),
  ],
};

process.argv.slice(2).map(async (input) => {
  try {
    const files = await imagemin([input], imageminOptions);
    await Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            fs.writeFile(input, file.data, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          })
      )
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
