Open the repo in VSCode and allow using TS version [from workspace](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions) when prompted once you open any TS file.

Run Yarn once to [unplug](https://yarnpkg.com/advanced/lexicon/#unplugged-package) packages (notable esbuild).

```shell
yarn
```

Try running CLI tools

```shell
yarn prettier -c .
yarn eslint .
yarn tsc -b
```

Start the dev-server

```shell
yarn workspace @fc2022/app dev
```

Have fun!
