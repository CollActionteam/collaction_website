[![Powered by Vercel](https://raw.githubusercontent.com/CollActionteam/website/main/public/powered-by-vercel.svg)](https://vercel.com/?utm_source=collaction&utm_campaign=oss)

# CollAction Website

This repository contains the source code and assets required to build the [CollAction website](https://www.collaction.org/).

## Getting Started

- We suggest using [Node v16](https://nodejs.org/en/download/) and yarn (`npm i -g yarn`)

- Clone the repo

  `git clone https://github.com/CollActionteam/website.git`

- copy-paste file `.env.example`, rename it to `.env.local` and fill the secrets if needed

- Navigate to the website folder in your terminal

- Install the dependencies

  `yarn`

- Start the development server

  `yarn dev`

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
  > Want a quick fix? Upgrade to Node 16, if you haven't. Otherwise, you create a `.babelrc` in the root of your directory and paste the following:

  ```
  {
    "presets": ["next/babel"]
  }
  ```

> If you are using VSCode, you'll probably want to download the suggested extentions
