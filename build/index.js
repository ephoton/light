"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = require("commander");
const process = require("process");
const commands_1 = require("./commands");
const utils_1 = require("./utils");
cmd.version(utils_1.getVersion());
// dev
// init
cmd.command('init [type] [name]')
    .description('init a project, which should be [lib | koa | express].')
    .option('-s, --setup_mode [mode]', 'Which setup mode to use')
    .action((type, name, options) => {
    console.log('type & name & options in Init: ', type, name);
    commands_1.init(type, name, options);
});
// list
// start
cmd.command('start [name]')
    .description('start a gus-fe project.')
    .option('-d, --dev', 'setup development environment')
    .action((name, options) => {
    console.log('name & options in start: ', name, options);
    commands_1.start(name);
});
// stop
// tests
cmd.command('test <dir> [otherDirs...]')
    .action((dir, otherDirs) => {
    utils_1.log('rmdir %s', dir);
});
cmd.command('*')
    .action((...args) => {
    args.pop();
    utils_1.log.error(`  Error: ommand not found: ${args.join(' ')}`);
    cmd.outputHelp();
});
cmd.parse(process.argv);
if (!cmd.args.length) {
    cmd.outputHelp();
}
exports.GusCli = {};
//# sourceMappingURL=index.js.map