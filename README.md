# Compare Air Quality App

App that uses Open AQ Air Quality API to allow you to compare the quality of the air across cities in the UK.

**Live Demo Hosted On Netlify:** [https://aircompair.netlify.com/](https://aircompair.netlify.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the project root folder do:

```bash
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn deploy`

Run the test script in CI enabled mode. If the test pass it will run the build script.
Useful if you are using a CI tool like Jenkins, CircleCI, GitLabCI or Netlify.

## File Structure

The top level folders in the project are as follow:

* **build** - production ready build
* **public** - those are the public assets that will be used durning the build process (HTML, favIcon etc.)
* **src** - source code for the App

The *src* folder contains the following suborders:

### `/effects`

This folder contains our custom [Effect Hooks](https://reactjs.org/docs/hooks-effect.html). All the logic that deals with side effects (async calls, dom manipulation etc.) should be put here.

### `/state`

This folder contains logic around our `redux` store. Everything to do with actions and reducers should be put here.

**!!! Note:**  The store does not support async actions (no Thunks or Sagas). Those are currently handled by the custom hooks in the `effects` folder, making it possible to keep our `redux` implementation simple.

### `/components`

This is where our React components live

### `/sass`

This folder contains `SASS` variables and mixin's that can be used for theming the components.

### `/context`

This is where we should set our [Context Provider and Consumers](https://reactjs.org/docs/context.html). Those should be used send data trough the app. At the moment we have the `ConfigContext`, that will pass configuration trough the App. The configuration can include things like `API endpoints`, `DB ports`, global settings etc. All of those should be managed in single place (in the `config.js` file in the `src` folder). Avoid the use of "magic" strings or numbers.

## Styling

The project uses `SASS` as a styling solution. All of the base design elements like color, font family, font sizes etc. are declared as global variables so they can be managed in one place and easily updated. There are also couple of SASS `mixin's` that deal with setting breakpoints and add some CSS short codes.

The project also use an implementation of the [BEM methodology](http://getbem.com/) for class naming, where the `Block` is replaced with `Component`, so we should end up with something like:

```
className='Component--button__success'
```

Each component has a corresponding `scss` file next to it's definition that contains all of the css used to style it.

## Code Format

The project uses [eslint](https://eslint.org/) to keep the formating consistent. It also follows the [JavaScript Standard Style](https://standardjs.com/) rules.

## Testing

The project uses `Jest` as a test runner. It follows the suggested folder structure by the `Jest` team and next to each module you will find a `__tests__` folder with unit tests around it.

## Things to implement further

Since the project was build in limited time, there are some things it will be nice to introduce in next iterations:

### `Integration tests`

There are currently unit tests testing the functionality in isolation but I would like to build some `Integration` test as well so we can make sure that all the logic around side effects and component interaction works as expected. To achieve that I would use tools like [Nock](https://www.npmjs.com/package/nock), [Supertest](https://www.npmjs.com/package/supertest), [puppeteer](https://github.com/GoogleChrome/puppeteer)

### `End to end tests`

It would be good to work with a QA and UX specialists and come up with some user journeys for which we can implement `E2E` tests. To achieve that I would use [Cypress.io](https://www.cypress.io/)

### Cross browser / Cross Device testing

The project was briefly tested on Chrome and Safari and at various breaking points using the built in DevTools those browsers provide. I also tested it on my IPhone and IPad. We should do more testing, ideally using actual devices, to make sure there are no inconsistencies in the user experience.

### Building custom search box component

The project uses the build in `datalist` tag. That's OK for MVP but it will behave differently in different browsers. We need to make sure we completely control the presentation and the functionality. Styling the `datalist` so it acts the same way in every browser is quite challenging so it will probably be better if we build a custom react component to handle that. We can probably use an npm package like [react-autocomplete](https://www.npmjs.com/package/react-autocomplete) but this hasn't been updated in two years so I will probably avoid adding it to the code base.






