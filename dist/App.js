const {app, BrowserWindow} = require("electron");


const URL = `file://${process.cwd ()}/dist/index.html`;

app.on ("ready", () => {

	const Window = new BrowserWindow ();
	Window.loadURL (URL);
});