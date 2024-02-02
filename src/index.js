// src/index.js
const plugin = require('tailwindcss/plugin')

const components = require('../dist/assets/index-NEZL084I.css')


const TailwindUiKitPlugin11 = plugin(
  function ({addComponents }) {
    addComponents(components)
  },
)

module.exports = TailwindUiKitPlugin11