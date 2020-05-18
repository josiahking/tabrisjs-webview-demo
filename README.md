# tabrisjs-webview-demo
Launch a website using webview

## Run

If you haven't done so already, install the [Tabris CLI](https://www.npmjs.com/package/tabris-cli) on your machine:

```
npm i tabris-cli -g
```

Then in the project directory, type:

```
npm start
```


This will start a Tabris.js code server at a free port and print its URL to the console. The app code can then be [side-loaded](https://docs.tabris.com/3.4/developer-app.html#run-your-app) in the [developer app](https://docs.tabris.com/3.4/developer-app.html) by entering that URL.

Alternatively you can also call the Tabris CLI directly:

```
tabris serve -a
```

This the same as running `npm start`. The `-a` switch enables automatic reload whenever a source file changes.

## Test

This project includes a ESLint configuration that helps preventing common mistakes in your code. Most IDEs can display ESLint-based hints directly in the editor, but you can also run the tool explicitly via:

```
npm test
```

The initial rules defined in `.eslintrc` are supposed to warn against problematic patterns, but not enforce a strict code style. You may want to [adjust them](https://eslint.org/docs/rules/) according to your taste.

## Debugging


### Android

Tabris on Android supports any debugger that uses the V8 inspector protocol. This includes Visual Studio Code, WebStorm and the Chrome Browser. More information can be found [here](https://docs.tabris.com/3.4/debug.html#android).

### iOS

On iOS, the Safari developer tools [can be used for debugging](https://docs.tabris.com/3.4/debug.html#ios).
## Build

The app can be built using the online build service at [tabrisjs.com](https://tabrisjs.com) or locally using [Tabris.js CLI](https://www.npmjs.com/package/tabris-cli).

See [Building a Tabris.js App](https://docs.tabris.com/3.4/build.html) for more information.
