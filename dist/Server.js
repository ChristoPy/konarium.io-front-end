const Shell = require ("shelljs");

const PORT = 7373;


Shell.exec (`http-server ./dist -p ${PORT}`);


console.log (`Serving On: http://localhost:${PORT}/`);


module.exports.PORT = PORT;