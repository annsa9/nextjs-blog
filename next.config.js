const withPWA = require("next-pwa");

module.exports = withPWA({
  distDir: "build",
  pwa: {
    dest: "public",
  }
});
