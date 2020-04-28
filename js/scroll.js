import jump from "/node_modules/jump.js/dist/jump.module.js";

document.getElementById("back-to-top").onclick = () => {
  jump("#header", {
    duration: 1500,
  });
};