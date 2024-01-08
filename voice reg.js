const annyang = require('annyang');

// Initialize annyang
annyang.init();

// Define voice commands
const commands = {
  'hello': () => {
    console.log('Hello there!');
  },
  'goodbye': () => {
    console.log('Goodbye!');
  },
  'open *app': (app) => {
    console.log(`Opening ${app}...`);
  },
};

// Add commands to annyang
annyang.addCommands(commands);

// Start listening for voice commands
annyang.start({ autoRestart: true, continuous: false });

// Handle errors
annyang.addCallback('error', (error) => {
  console.error('Error:', error);
});

// Handle when the user stops speaking
annyang.addCallback('end', () => {
  console.log('Speech recognition ended.');
});
