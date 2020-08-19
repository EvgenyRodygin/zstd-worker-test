# zstd-worker-test
Demo of ThreadsPluing crash with zstd-codec
1. `yarn install`
2. `yarn build` -> this will fail
3. Add the target param to ThreadsPlugin: `new ThreadsPlugin({target: "node"})`
