const readLine= require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readLine.question(`Welcome to Holberton School, what is your name?`, name => {
  console.log(`Your name is:${name}!`);
  readLine.close();
  console.log('This important software is now closing')
});
