const {app, BrowserWindow} = require ("electron");
const Port = require ("./Server.js");


const URL = `http://localhost:${Port}/`;

app.on ("ready", () => {

	const Window = new BrowserWindow ({
		webPreferences: {
			nodeIntegration: false
		}
	});

	Window.loadURL (URL);
});