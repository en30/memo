const path = require("path");
const fs = require("fs");
const moment = require('moment')
const format = require('./format')

const transform = (source, time) => `
${source}

export const createdAt = ${time}
`

module.exports = function(source) {
  this.cacheable(true);
  const callback = this.async();
  const basename = path.basename(this.resourcePath, path.extname(this.resourcePath))
  if(/\d{4}-\d{2}-\d{2}T\d{6}/.test(basename)) {
    callback(null, transform(source, moment(basename, format).valueOf()));
    return;
  }
  fs.stat(this.resourcePath, (err, stats) => {
    if(err) return callback(err);
    callback(null , transform(source, stats.birthtime.getTime()));
  })
}
