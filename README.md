[![Powered by Vercel](https://raw.githubusercontent.com/CollActionteam/website/main/public/powered-by-vercel.svg)](https://vercel.com/?utm_source=collaction&utm_campaign=oss)

# CollAction Website

This repository contains the source code and assets required to build the [CollAction website](https://www.collaction.org/).

## Getting Started

- Clone the repo

  `git clone https://github.com/CollActionteam/website.git`

- Navigate to the website folder in your CLI

- Install the dependencies

  `npm install`

- Start the development server

  `npm run dev`

- Open [http://localhost:3000](http://localhost:3000) in your browser and the website folder in your preferred code editor

  > When starting the server you might receive the following error:
  >
  > `Error: The specified module could not be found.`
  >
  > Which is caused by:
  >
  > `@next\swc-win32-x64-msvc\next-swc.win32-x64-msvc.node`
  >
  > You can track the issue on [this Next.js discussion](https://github.com/vercel/next.js/discussions/30468)
  >
  > Want a quick fix? Create a `.babelrc` in the root of your directory and paste the following:

  ```
  {
    "presets": ["next/babel"]
  }
  ```

## Pushing Changes

- Save your files
- Select the files to be committed
- Describe the changes in your commit message
- Push your commits
- Next.js will automatically build and publish the site for you
