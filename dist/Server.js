const Server = require ("serve-here.js");

const PORT = 7373;

module.exports.Start = () => Server.Start (__dirname, 7373);
module.exports.Stop = () => Server.Stop ();
module.exports.PORT = PORT;