# Infotition Community Contributing Guide

The goal of this document is to create a contribution process that:
- Encourages new contributions.
- Encourages contributors to remain involved.
- Helping you set up a nice development environment.
- Avoids unnecessary processes and bureaucracy whenever possible.
- Creates a transparent decision making process that makes it clear how contributors can be involved in decision making.

## Developing

The development branch is `dev`. This is the branch that all pull requests should be made against. After publishing a stable release, the changes in the `dev` branch are rebased into `master`. 

Guide to develop locally:

1. Fork this repository to your own GitHub account and then clone it to your local device.
2. Create your own development branch:
   ```bash
   git checkout -b <YOUR_BRANCH_NAME>
   ```
3. Install the dependencies with:
   ```bash
   npm install
   ```
4. Start developing and look at the result:
   ```bash
   npm run dev
   ```

## Development Environment

We recommend using [Visual Studio Code](https://code.visualstudio.com/) as your Text Editor. For a trouble-free development experience we also recommend installing these extensions in Visual Studio Code:

- Better Comments (Aron Bond)
- EditorConfig for VS Code (EditorConfig)
- ESLint (Dirk Baeumer)
- GitLens (GitKraken)
- JavaScript and TypeScript Nightly (Microsoft)
- Prettier (Prettier)
- Prettier ESLint (Rebecca Vest)
- Stylelint (Stylelint)
- TypeScript Hero (Christoph Bühler)

A nice theme for Visual Studio Code is `palenight` from the Community Material Theme package. The Material Icon Theme packge is also handy.

If you installed the extensions, you can add the following settings to your Visual Studio Code settings.json:
```json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript"
    ],
    "javascript.updateImportsOnFileMove.enabled": "always",
    "explorer.confirmDelete": false,
    "explorer.compactFolders": false,
}
```

Feel free to use your own development environment, this is just a suggestion to getting started.

## Testing

Run this command to execute the jest test suites.
```bash
$ npm run test:unit
```

If the ui changed and the snapshots failed, make sure everything works correctly. To update the snapshots you then can run this command.
```bash
$ npm run test:unit:update
```

Run this command to run the integration and e2e tests.
```bash
$ npm run cypress
```

Run this command to run the user interface for the integration and e2e tests.
```bash
$ npm run cypress:open
```

## Issues

Open an issue for any problem, suggestion or hint you might have. Even if you are unsure, don't hesitate to open an issue. Committers will always be polite and guide you through the process. We are thankful for every Thought.

If you have a question (for example about the code), please ask it in the [Discord server](https://discord.gg/NpxrDGYDwV) instead of opening an issue because the **issue tracker is only for bug reports and enhancement suggestions**.

Please always be polite and respectful. Every participant is expected to follow the project's [Code of Conduct](https://github.com/Infotition/next.js-boilerplate/blob/main/.github/CODE_OF_CONDUCT.md).

## Contributions

Any change to resources in this repository must be through pull requests. This applies to all changes to documentation, code, text files, etc. Even long term committers must use pull requests.

No pull request can be merged without being reviewed.

Please keep in mind that we use ESLint to enforce a consistent coding style, so having that set up in your editor of choice is a great boon to your development process. Also all javascript files should be written in TypeScript.

Requirements for every code contribution:

  - All tests (jest tests and cypress integration and e2e tests) must pass.
  - Follow the configured eslint codestyle. Check the codestyle with `npm run lint` and your static typing with `npm run type:check`.
  - If you fix a bug or added a feature, add a test.
