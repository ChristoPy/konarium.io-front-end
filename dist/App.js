const {app, BrowserWindow} = require ("electron");
const {PORT, Stop} = require ("./Server.js");


const URL = `http://localhost:${PORT}/`;

app.on ("ready", () => {

	let Window = new BrowserWindow ({
		webPreferences: {
			nodeIntegration: false
		},
		backgroundColor: "#e5e5e5"
	});

	Window.on ("closed", () => {
		Stop ();
		Window = undefined;
	});


	Window.loadURL (URL);
});