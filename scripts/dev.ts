import { readdirSync } from 'fs';
import { join } from 'path';
import { runCommand, step, args } from './utils';

const mainAppName = 'launcher';
const rootDir = join(__dirname, '../examples/');

function getSubApps(appsList: string[]) {
    return appsList.filter((item) => item.includes('sub'));
}

async function dev(appName: string) {
    step(`[${appName}] Starting`);
    const runArgs = ['run', 'dev'];
    await runCommand('pnpm', runArgs, join(rootDir, appName));
}

async function main() {
    const apps = readdirSync(rootDir);
    const { app } = args;
    if (args.app) {
        if (apps.includes(app)) {
            await dev(args.app);
        } else {
            // app not exist
        }
    } else {
        const subApps = getSubApps(apps);
        subApps.forEach(async (item) => {
            await dev(item);
        });
        await dev(mainAppName);
    }
}

main();

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
