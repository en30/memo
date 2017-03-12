var path = require("path");
var fs = require("fs");


module.exports = function(source) {
  this.cacheable(true);
  const callback = this.async();
  fs.stat(this.resourcePath, (err, stats) => {
    if(err) return callback(err);
    callback(null ,`
${source}

export const createdAt = ${stats.birthtime.getTime()}
`);

  })
}
