const Shell = require ("shelljs");
Shell.config.execPath = Shell.which ("node");

const PORT = 7373;


const Start = () => {

	try {

		Shell.exec (`http-server ./dist -p ${PORT}`);
	} catch (SomeError) {

		console.log (SomeError);
		process.exit (0);
	}

	console.log (`Serving On: http://localhost:${PORT}/`);
}

Start ();

module.exports.PORT = PORT;