#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = require("commander");
const process = require("process");
const commands_1 = require("./commands");
const utils_1 = require("./utils");
utils_1.setMaxListeners();
cmd.version(utils_1.getVersion());
cmd.command('build <app>')
    .option('-d, --dev', 'build in development mode.')
    .description('build an app.')
    .action((app, options) => {
    commands_1.build(app, !!options.dev);
});
cmd.command('dev <app>')
    .description('build and watch an app in development mode.')
    .action((app, options) => {
    commands_1.dev(app);
});
cmd.command('init [type] [name]')
    .description('init a project, which should be [lib | koa | express].')
    .option('-s, --setup_mode [mode]', 'Which setup mode to use')
    .action((type, app, options) => {
    commands_1.init(type, name, options);
});
cmd.command('start <app>')
    .description('start an app.')
    .action((app, options) => {
    commands_1.start(app);
});
cmd.command('stop <app>')
    .description('stop an app.')
    .action((app, options) => {
    commands_1.stop(app);
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