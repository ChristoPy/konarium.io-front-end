const CMD = require ("node-cmd");

const PORT = 7373;

let Pid;

const Stop = () => {

	CMD.run (`kill ${Pid}`);
}

const Start = () => {

	const Process = CMD.get (`http-server ./dist -p ${PORT}`, 
		(SomeError, Data, StdErr) => console.log ((SomeError ? SomeError : Data)));

	console.log (`Serving On: http://localhost:${PORT}/`);

	Pid = Process.pid;
}

Start ();

module.exports.PORT = PORT;
module.exports.Stop = Stop;