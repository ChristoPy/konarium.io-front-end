const CMD = require ("node-cmd");

const PORT = 7373;


const Start = () => {

	CMD.get (`http-server ./dist -p ${PORT}`, 
		(SomeError, Data, StdErr) => console.log ((SomeError ? SomeError : Data)));

	console.log (`Serving On: http://localhost:${PORT}/`);
}

Start ();

module.exports = PORT;