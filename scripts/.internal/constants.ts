import { join } from 'path';

const ROOT = join(__dirname, '../../');

export const PATHS = {
  ROOT,
  Modules: join(ROOT, './modules'),
} as const;
