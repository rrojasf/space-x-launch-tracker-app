# Space X Launch Tracker App

Is a React.js based web client for consuming https://api.spacexdata.com/

This is app implements monorepo approach using turbo

# 1. Application Setup Guide

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `backend`: a express api
- `web`: A React app bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- `@packages/core`: Core React components for the app like services
- `@packages/shared-types`: Common types definitions
- `@packages/ui`: Intends to be a shared library for ui components
- `@packages/eslint-config`: `eslint` preset configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@packages/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This repo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Getting started

### VSCode Settings

This repo includes some starter VSCode settings and suggested extensions, located in the: `.vscode` folder. They should work automatically the first time you open the repository.

### Setting up Node

It's recommended to use a node version manager such as [nvm](https://github.com/nvm-sh/nvm) or an alternative.

If you're using nvm, you can run the following command to install the correct version of node:

nvm list (to see a list of available versions of node in your system)
nvm use (to select the right one)

```bash
nvm list
nvm use
```

### Clonning the repo

```bash
git clone https://github.com/rrojasf/space-x-launch-tracker-app.git
cd space-x-launch-tracker-app
```

### Installing dependencies

Once your node version is setup correctly, the next step is to install the dependencies by running:

```bash
yarn
```

### Environment variables

If this is your first time running the app, you'll want to create a `.env.local` or `.env` file in the root of the projects (web and backend). Make sure to update the values in the right file your local environment.

apps/web:

REACT_APP_API_URL=

apps/backend:

PORT=5000
FRONTEND_URL=http://localhost:3000
SPACEX_API_URL=https://api.spacexdata.com/v5
TWITTER_API_URL=https://api.twitter.com/2
TWITTER_BEARER_TOKEN=<your-token>
NODE_ENV=development

Note: TWITTER integration is not ready! WIP

## Commands

### Running the app

To run the app locally, use the following command:

```bash
yarn dev
```

Visit:

- [Launches Page](http://localhost:3000/launches)
- [Favorites Page](http://localhost:3000/favorites)

# Published Demo

- [Web](https://space-x-launch-tracker-app.vercel.app/)
- [Api](https://space-x-launch-tracker-app-backend.vercel.app/)

### Unit tests

To run unit tests, use the following command:

```bash
yarn test
```

### Linting

```bash
yarn lint
```

### Formatting

To format the code, use the following command:

```bash
yarn format
```

### Other commands

See the [package.json](./package.json) in the root of the repo for a full list of commands you can run.

For dev purposes the previous commands are the most important ones.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
