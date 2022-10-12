# lilypad

React Component Library

```
  _        _   _                               _
 | |      (_) | |                             | |
 | |       _  | |  _   _   _ __     __ _    __| |
 | |      | | | | | | | | | '_ \   / _` |  / _` |
 | |____  | | | | | |_| | | |_) | | (_| | | (_| |
 |______| |_| |_|  \__, | | .__/   \__,_|  \__,_|
                    __/ | | |
                   |___/  |_|
```

## Installation

Lilypad is available as an [npm package](https://github.com/mozilla/lilypad/pkgs/npm/lilypad).

### Step 1.

First, create an access token on Github to fetch our maintained Lilypad component library on npm, you need to create an access token on github and enable Mozilla organization on the access token.

### Step 2.

Configure your local install of NPM itself to be authorized to use Lilypad. To do this we use a `.npmrc` file. This file is NOT PART OF YOUR PROJECT. This is a global file in a central location. For Mac/Linux users it goes in your home directory ~/.npmrc.

For Windows users it goes in your home directory as well, though the syntax will be different. Something along the lines of C:\Users\{YOUR_WINDOWS_USERNAME}

### Step 3.

Once you have created the file, edit it to include the following information:

~/.npmrc

```sh
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

### Step 4.

**npm:**

```sh
npm install @mozilla/lilypad
```

**yarn:**

```sh
yarn add @mozilla/lilypad
```

## Getting started with Lilypad

Here is an example of a basic app using Lilypad's `Button` component:

```jsx
import * as React from 'react';
import { Button, ButtonCategoriesE } from '@mozilla/lilypad';

function App() {
  return (
    <Button
      category={ButtonCategoriesE.PRIMARY_SOLID}
      icon="alert-circle"
      text="click me!!"
    />
  );
}
```

## Adding Styles

```scss
@import '@mozilla/lilypad/dist/styles/theme.scss';
```

```jsx
  // Set to Light Theme,
  // Note: if a "data-theme" is not set on <main> it will default the "light" theme
 <main data-theme="light"></main>

 // Set to Dark Theme
 <main data-theme="dark"></main>

 // Get theme from users settings "dark" or "light"
 <main data-theme={themeFromUserSettings}></main>
```

This will also let you access all of the great utility classes here [utility.scss](https://github.com/mozilla/lilypad/blob/readme/src/styles/core/utility.scss).

Feel free to override these [CSS variables](https://github.com/mozilla/lilypad/blob/readme/src/styles/theme.scss) with your own colors!

## License

This project is licensed under the terms of the
[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).
