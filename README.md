# Koa and React "Boilerplate" in Typescript

 
I tried to create a stack with a Koa server written in Typescript serving a React Applications in plain JS (maybe 
with flow later).

I wanted to have hot reloading and only one server instance running.

I've used webpack for packaging the client web app. To have a the same server in `production` and `devlopment` mode 
I've used `webpack-dev-middleware` and `webpack-hot-middleware` (`express` middleware) and connect them to Koa with 
`koa2-connect`.
 

### Stack :
  - `Koa` (Server)
  - `React`
  - `Material-UI`
  - `Webpack`
  - `Typescript`
  - `TsLint`  

## Roadmap
  - [ ] Better README.md
  - [ ] Add Redux
  - [ ] Add React-Router
  - [ ] Add Graphql with Apollo
  - [ ] Add more Demo Components

## Get started with

```
  git clone https://github.com/pgdejardin/koa-react-ts.git yourprojectname
  cd yourprojectname
  rm -rf .git
  git init .
```
