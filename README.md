# lilypad

React Component Library

![Alt text](src/assets/readme.jpg?raw=true 'lilypad graphic')

## Installation

**npm:**

```sh
npm install @mozilla/lilypad-ui
```

**yarn:**

```sh
yarn add @mozilla/lilypad-ui
```

## Getting started with Lilypad

Here is an example of a basic app using Lilypad's `Button` component:

```jsx
import * as React from 'react';
import { Button, ButtonCategoriesE } from '@mozilla/lilypad-ui';

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

## Storybook

[click here!](https://mozilla.github.io/lilypad/)

## Adding Styles

```scss
@import '@mozilla/lilypad-ui/dist/styles/theme.scss';
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
