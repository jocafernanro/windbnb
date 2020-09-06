const fs = require("fs");
const { exec } = require("child_process");
var mkdirp = require("mkdirp");
var getDirName = require("path").dirname;

const POSTCSS_FILE = "postcss.config.js";
const TAILWIND_CSS_FILE = "./src/assets/css/tailwind.css";
const MAIN_JS_FILE = "./src/main.js";

const postcss_css_config_file_content = `const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
`;

const tailwind_css_file_content = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

function writeFile(path, contents, cb) {
  mkdirp(getDirName(path), function(err) {
    if (err) return cb(err);

    fs.writeFile(path, contents, cb);
  });
}

exec("npm install tailwindcss", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

writeFile(POSTCSS_FILE, postcss_css_config_file_content, function(err) {
  if (err) throw err;
  console.log("postcss config file created!");
});

writeFile(TAILWIND_CSS_FILE, tailwind_css_file_content, function(err) {
  if (err) throw err;
  console.log("tailwind.css file created!");
});

fs.readFile(MAIN_JS_FILE, "utf-8", function(err, data) {
  if (err) throw err;

  const tailwind_import_line = `import './assets/css/tailwind.css';
  
Vue.config.productionTip = false;`;

  var newValue = data.replace(
    /Vue\.config\.productionTip = false/gim,
    tailwind_import_line
  );

  fs.writeFile(MAIN_JS_FILE, newValue, "utf-8", function(err) {
    if (err) throw err;
    console.log("tailwind.css file imported!");
  });
});

exec("npx tailwindcss init", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
