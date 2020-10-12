// Import Chalk Package
const chalk = require('chalk');

// Style a string
console.log(chalk.blue('Hello'));

// Declare variable chalk
var chalk2
// Combine styled & normal strings
chalk2 = chalk.rgb(255, 255, 0)('Hello') + 'World' + chalk.red('!');
console.log(chalk2);

// Compose multiple styles
chalk2 = chalk.blue.bgYellowBright('Hello World!');
console.log(chalk2);

// Pass in multiple arguments
chalk2 = chalk
    .hex('ff00ff')
    .bold('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz');
console.log(chalk2);

// Nest styles
chalk2 = chalk.underline('Hello', chalk.green('world') + '!');
console.log(chalk2);
