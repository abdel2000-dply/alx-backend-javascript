// Using Process stdin and stdout
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    process.stdout.write(`Your name is: ${data}\n`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
