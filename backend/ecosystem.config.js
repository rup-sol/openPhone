module.exports = {
  apps: [{
    name: "backend",
    script: "./dist/main.js",  // Ensure this path is correct
    watch: true,  // Optional: Set to true if you want to restart on file changes
  }]
}

