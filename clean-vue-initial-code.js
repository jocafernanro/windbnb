const fs = require("fs");

const APP_VUE_FILE = "./src/App.vue";
const HELLO_WORLD_VUE_FILE = "./src/components/HelloWorld.vue";

const APP_STYLE_CONTENT = `:root {
  --global-font-family: "Montserrat", "Helvetica Neue", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --global-font-size: 1rem;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
}
html,
body {
  font-family: var(--global-font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}`;

const APP_STYLE_CONTENT_TO_BE_REPLACED = `#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}`;

try {
  fs.unlink(HELLO_WORLD_VUE_FILE, function(err) {
    if (err) console.log(err);
    // if no error, file has been deleted successfully
    console.log("File deleted!");
  });
} catch (err) {
  console.error(err);
}

fs.readFile(APP_VUE_FILE, "utf-8", function(err, data) {
  if (err) throw err;

  let newValue;

  newValue = data
    .replace(
      /<img alt="Vue logo" src=".\/assets\/logo\.png" \/>\n {4}<HelloWorld msg="welcome to your Vue.js App" \/>/gim,
      `<div class="font-bold text-blue-500">Testing Tailwindcss</div>`
    )
    .replace(
      /import HelloWorld from "\.\/components\/HelloWorld\.vue";\n\n/gim,
      ""
    )
    .replace(/components: {\n {4}HelloWorld\n {2}}/gim, `components: {}`)
    .replace(APP_STYLE_CONTENT_TO_BE_REPLACED, APP_STYLE_CONTENT);

  fs.writeFile(APP_VUE_FILE, newValue, "utf-8", function(err) {
    if (err) throw err;
    console.log("Vue.app file cleaned");
  });
});
