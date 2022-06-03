# Cardy Html Component


## Description

Cardy is a simple component for displaying content in a card format.

## Installation
You can install Cardy by using npm:

```bash
npm i cardy_html_component
```

or yarn:

```bash
yarn add cardy_html_component
```


## Usage

In your HTML file, you can use the Cardy component like this:

```html
<my-card
    nom="CP1" 
    number="30"
/>
```

add js array of cards:

```js
const myCard = document.querySelector('my-card');
myCard.moreOption = ["CM2 A", "CM2 B", "CM2 C"]
```
add event listener for watch more option checkbox state change:

```js
myCard.addEventListener('optionChecked', (e) => {
    console.log(e.detail);
});
```
## Technical details

[![ Javascript](https://img.shields.io/badge/javascript-ES6-blue.svg)](https://www.javascript.com/)
[![ npm](https://img.shields.io/npm/v/cardy_html_component.svg)](https://www.npmjs.com/package/cardy_html_component)
[![ npm](https://img.shields.io/npm/l/cardy_html_component.svg)](https://www.npmjs.com/package/cardy_html_component)
![ github](https://img.shields.io/github/stars/toutpuissantged/Cardy-Html-Components.svg?style=social)
![ github](https://img.shields.io/github/issues/toutpuissantged/Cardy-Html-Components.svg?style=social)

## Contributing

To contribute to this project, please fork it on GitHub and open a pull request.

## License

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)