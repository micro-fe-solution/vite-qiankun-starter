import 'zx/globals';
import path from 'path'
import { logger, fsExtra } from '@umijs/utils';
import { PATHS } from './.internal/constants';

(async () => {
  const root = PATHS.ROOT;
  const pkgs = await fs.readdir(PATHS.Modules);

  logger.event('build pkgs');
  await $`pnpm run --parallel build`;

  logger.event('remove dist dir');

  await fsExtra.remove('dist')

  logger.event('copy build result');

  for (let i = 0; i < pkgs.length; i++) {
    const pkg  = pkgs[i];

    if (pkg === 'launcher') {
      await fsExtra.copy(path.join(PATHS.Modules, `${pkg}/dist`), path.join(root, 'dist'))
    } else {
      await fsExtra.copy(path.join(PATHS.Modules, `${pkg}/dist`), path.join(root, `dist/${pkg}`))
    }
  }

  logger.event('done');
})();
