module.exports = {
    presets: [
      ["@babel/preset-env", {
        "targets": {
          "node": "current"
        }
      }],
      ["@babel/preset-react", {
        "runtime": "automatic"  // This allows you to skip importing React in every JSX file
      }]
    ]
  };
  