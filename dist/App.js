const {app, BrowserWindow} = require("electron");


const URL = (process.env.NODE_ENV === "DEV" 
			? "http://localhost:8080/" 
			: `file://${process.cwd()}/dist/index.html`);

app.on ("ready", () => {

	const Window = new BrowserWindow ();
	Window.loadURL (URL);
});