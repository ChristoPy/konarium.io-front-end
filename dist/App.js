const {app, BrowserWindow} = require ("electron");

const URL = `http://localhost:7373/`;

app.on ("ready", () => {

	const Window = new BrowserWindow ();
	Window.loadURL (URL);
});