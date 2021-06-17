# TS-sorting-algorithms 🚀

Various number sorting algorithms written in TypeScript.

## Installation

Use [git](https://git-scm.com/downloads) to clone the [repo.](https://github.com/bosh-code/ts-sorting-algorithms)

```shell
git clone https://github.com/bosh-code/ts-sorting-algorithms.git
```

Use [node](https://nodejs.org/en/download/) and npm to install dependencies.

```shell
cd ts-sorting-algorithms && npm i
```

___

## Running

The npm scripts for the project are:

```json5
{
  "start": "npm-run-all build demo",
  "demo": "node dist/index.js",
  "lint": "eslint . --ext .ts",
  "build": "tsc --build"
}
```

The standard way to run the project is with:

```shell
npm run start # bad name, I know
```

This will compile the .ts files and run the project. If no changes have been made to the source, the project can be run
with:

```shell
npm run demo
```

___

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors

This project was developed at [EDA](https://devacademy.co.nz/) for research on a lightning talk ⚡️. The author of
the project is [Ryan Bosher](https://github.com/bosh-code/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
