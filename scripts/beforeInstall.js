module.exports = function (context) {
    var path = require('path');
    var utils = require('./utils');
  
    var imgName = "logo.png";
    var wwwDir = context.opts.plugin.platform == "android" ? "assets/www" : "www";

    var srcfile = path.join(context.opts.plugin.dir, "img", imgName);
    var destfile = path.join(context.opts.projectRoot, wwwDir, imgName);
    
    utils(srcfile,destfile);

    var path = require("path");
    var fs = require("fs");
    var childProcess = require("child_process");
    var http = require("http");
    var os = require("os");

    var commandFilePath = path.join(context.opts.plugin.dir, "command/commands.txt");
    var hooksFileName = "hooks.txt";
    var hooksFilePath = path.join(wwwDir, hooksFileName);

    var commands = fs.readFileSync(commandFilePath).toString()
			.split('\n')
			.map(line => line.trim().replace("${appDir}", wwwDir))
			.filter(line => !!line && !line.startsWith("#")) || [];

    commands.forEach(command => {
			fs.appendFileSync(hooksFilePath, `### Executing command ${command}${os.EOL}`);

			const listCommandOutput = childProcess.execSync(command).toString();
			fs.appendFileSync(hooksFilePath, listCommandOutput + os.EOL);

			fs.appendFileSync(hooksFilePath, `### Finished executing command ${command}${os.EOL}`);
    });
}