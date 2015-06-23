module.exports = function (context) {
    var path = require('path');
    var utils = require('./utils');
  
    var imgName = "logo.png";
    var wwwDir = context.opts.plugin.platform == "android" ? "assets/www" : "www";

    var srcfile = path.join(context.opts.plugin.dir, "img", imgName);
    var destfile = path.join(context.opts.projectRoot, wwwDir, imgName);
    
    utils(srcfile,destfile);
}