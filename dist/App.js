const {app, BrowserWindow} = require ("electron");
const {Start, Stop, PORT} = require ("./Server.js");


const URL = `http://localhost:${PORT}/`;

app.on ("ready", () => {

	Start ();

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