# earthquake-zen-garden

![CI Status](https://github.com/dhruv-m-patel/earthquake-zen-garden/workflows/Continuous%20Integration/badge.svg)

### Setup

```
$ git clone git@github.com:dhruv-m-patel/earthquake-zen-garden.git
$ npm install
$ cp .env.example .env
$ npm run build
$ npm run start-dev
```

## Project Structure

The application uses a fairly modern folder structure for project organization that goes into a universal react app.

```
src               : This is where code for the application goes, along with unit tests for components
|- client         : All client specific integration code for the react app goes here
|-- redux         : Everything redux related goes in here
|--- reducers     : This is where all reducers are defined to listen to event broadcast and handle state management
|--- actions.js   : Defines all actions and events that are broadcast by the actions using redux-api-middleware
|-- index.js      : Hydrates and renders client side react app with code-splitting support using loadable-components
|-- renderApp.js  : The client-side react app
|- common         : This is where everything shared between the client and server can go e.g. components, constants, contexts etc.
|-- components    : All react components are placed in this folder. If a component needs to use multiple components that are not reusable, place them in same component folder.
|-- constants     : All application constants are defined here
|-- context       : A place to preserve any and all contexts used by the react app that can be integrated with createContext and useContext
|-- prop-types    : All reusable component prop-types are specified here
|-- styles        : Style variables are defined here
|-- router.jsx    : The application router that specifies which routes can be consumer by application
|- lib/utils      : All common utilities can be found here
|- server         : All server-side integration code goes into here
|-- middleware    : Defines middlewares that can be integrated with requests
|-- models        : Defines different models with their methods to consume APIs
|-- routes        : All server-side route handlers are defined here to help preload client state and perform necessary server work
|--- api          : The server-exposed client api route handlers are written here for client app to make XMLHttpRequests to talk to server through redux-api-middleware
|-- index.js      : Runs the express server application
|-- app.js        : Provides the express server application with required configuration
tests             : This is where test helpers and tests for utilities and integration can be written
```

## Conventions

- If a route needs to preload some state to load page faster with data, then route handlers must be defined for that specific route in `src/server/routes`

- Any APIs needed for client use to make XMLHttpRequests should be defined in `src/server/routes/api`

- It is preferred to write a reusable react component in a separate folder within `src/common/components`; however if the component becomes complex and inner components can be extracted which are component-specific then those leaf components should be placed within same component folder.

- Unit tests are written using `jest` and `enzyme` for each component to verify its rendering in different states

- It is preferred to keep component separate from consuming redux data directly and instead use the component's index file to injest redux state data and dispatchers
