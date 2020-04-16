const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess({
    // ...svelte-preprocess options
    typescript: {
      tsconfigFile: './tsconfig.json'
    },
  }),
  // ...other svelte options
  emitCss: true,
  hotReload: true,
};