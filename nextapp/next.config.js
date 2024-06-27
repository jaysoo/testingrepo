//@ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const configValues = {
  default: {
    assets: [],
    fileReplacements: [],
    outputPath: '.',
  },
  development: {},
  production: {
    assets: [
      {
        input: '../tools',
        output: '..',
        glob: 'test.txt',
      },
    ],
    fileReplacements: [
      {
        replace: './src/app/msg.ts',
        with: './src/app/msg.prod.ts',
      },
    ],
  }
}

const configuration = process.env.NX_TASK_TARGET_CONFIGURATION || 'default';

const options = {
  ...configValues.default,
  ...configValues[configuration],
}


/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
    ...options,
  },
};
const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];
module.exports = composePlugins(...plugins)(nextConfig);
