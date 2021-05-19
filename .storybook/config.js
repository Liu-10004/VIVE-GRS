/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react'
// @see https://github.com/vivedu/VIVEDU-Homepage/issues/74
import '../src/styles/reset.scss'
// @see https://github.com/ZhuGongpu/CodeSnippets/issues/79
import '../src/styles/global.scss'

// eslint-disable-next-line max-len
// @see https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
