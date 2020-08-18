const Bottle = require('bottlejs');

const bottle = new Bottle();

require('./chalk/chalk')(bottle);
require('./exec/exec')(bottle);
require('./fs/fs')(bottle);
require('./path/path')(bottle);

require('./settings/settings')(bottle);
require('./settings/setting/dir')(bottle);
require('./settings/setting/shell')(bottle);

require('./dir-service/dir-service')(bottle);

require('./program/program')(bottle);
require('./program/version')(bottle);
require('./program/command/code')(bottle);
require('./program/command/dir')(bottle);
require('./program/command/list')(bottle);
require('./program/command/shell')(bottle);

module.exports = bottle.container;
