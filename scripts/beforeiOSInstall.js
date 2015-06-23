module.exports = function(context) {
    var path = require('path');
    var utils = require('./utils');
  
    var srcfile = path.join(context.opts.plugin.dir, "img/ios.png");
    var destfile = path.join(context.opts.projectRoot, "www/platform.png");
    
    utils(srcfile,destfile);
}