import { withKnobs } from '@storybook/addon-knobs';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';

import { loadStories } from './storyLoader';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('../docs/intro.stories.tsx');
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: false,
});

export default StorybookUIRoot;
