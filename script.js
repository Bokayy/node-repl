//init repl
const repl = require('repl');
const options = { useColors: true };
const firstInstance = repl.start(options);
//const secondInstance = new repl.REPLServer(options);
//init repl

function welcome(name) {
    return `Hello ${name}!`;
  }

welcome('Node.js User');
