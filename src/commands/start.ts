import { getConfig } from './../utils';
import { AppConfigInfo, App } from './../lib/server/app';

export function start(name: string) {
  const config = getConfig(name);
  const options: AppConfigInfo = Object.assign({}, config);

  App.init(name, options);
  App.start(name);
}
