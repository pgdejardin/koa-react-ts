# Koa and React "Boilerplate" in Typescript

 
I tried to create a stack with a Koa server serving a React Applications written in Typescript.

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
  - [ ] Add Redux
  - [ ] Add React-Router
  - [ ] Add Graphql with Apollo
  - [ ] Add more Demo Components
