import fs from "fs";
import glob from "glob";

glob.sync("dist/**/*.html.html").forEach((filename) => {
  // 重複する.htmlを削除する
  fs.renameSync(filename, filename.replace(/\.html$/, ""));
});
