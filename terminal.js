// Creating and configuring the terminal
const terminal = new Terminal({
    cursorBlink: true,
    theme: {
        background: '#0d0d0d',
        foreground: '#ffffff',
        cursor: '#ffffff',
    }
});

// Display the terminal on the page
terminal.open(document.getElementById('terminal'));