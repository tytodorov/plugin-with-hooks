module.exports = function(srcfile, destfile) {
    var fs = require('fs');
    var path = require('path');
  
    console.log("Copying " + srcfile + " to " + destfile);
  
    var destdir = path.dirname(destfile);
    if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
        fs.createReadStream(srcfile).pipe(
            fs.createWriteStream(destfile));        
        console.log("Done " + srcfile + " to " + destfile);
    }
}