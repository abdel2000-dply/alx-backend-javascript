// Using Process stdin and stdout
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    const name = data.toString().trim();
    if (name) {
      process.stdout.write(`Your name is: ${name}\n`);
    }
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
