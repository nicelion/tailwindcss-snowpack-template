# tailwind-css-snowpack-template

A bare-bones starter template that uses TailwindCSS and Snowpack

## Usage
### Installation
You can install this template at any directory you would like. Simply, you can do a `git clone` on this repository.

The best way to get this template on your machine is a tool called [degit](https://github.com/Rich-Harris/degit). 

After you have installed `degit` on your machine, simply run the command `degit nicelion/tailwindcss-snowpack-template my-new-project` to install it in a new directory "my-new-project". When using `degit`, the files in the main repo are copied into the directory you specify, without the git history.

### How to run on localhost
After you have cloned or scaffolded this repo using degit...

Install dependencies:

```sh
npm install
```

To run in dev mode mode:

```sh
npm start
```

Then go to http://localhost:8080

To create a production build:

```sh
npm run build
```

This will generate a build folder which is by default ignored by `.gitignore`
