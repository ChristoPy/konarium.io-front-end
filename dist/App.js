const Server = require ("./Server.js");
const {app, BrowserWindow} = require ("electron");


const URL = `http://localhost:${Server.PORT}/`;

app.on ("ready", () => {

	const Window = new BrowserWindow ();
	Window.loadURL (URL);
});