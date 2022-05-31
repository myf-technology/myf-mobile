import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ScrollView, View } from 'react-native';

import { Button } from '../src/components/Button';
import { Icon } from '../src/components/Icon';
import { Text } from '../src/components/Text';
import { Toggle } from '../src/components/Toggle';
import Colors from '../src/constants/Colors';
import Layout from '../src/constants/Layout';
import Valepay from '../src/icons/Valepay';
import ValepayLogo from '../src/icons/ValepayLogo';

storiesOf('Get Started', module).add('Introduction', () => (
  <View style={{ paddingHorizontal: Layout.paddingHorizontal, flex: 1 }}>
    <View style={{ marginVertical: 20 }}>
      <View style={{ alignSelf: 'center' }}>
        <Icon name="Valepay" fill={Colors.dark} />
      </View>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginTop: 20 }}>
        <Text textAlign="left" font="title2">
          Welcome!
        </Text>
      </View>

      <View style={{ marginBottom: 30 }}>
        <Text textAlign="left" font="footnote">
          This is the Valepay storybook.
        </Text>
      </View>

      <View style={{ marginBottom: 5 }}>
        <Text textAlign="left" font="body">
          Here we will show up a few things:
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: Layout.paddingHorizontal,
          marginBottom: 50,
        }}
      >
        <Text textAlign="left" font="callout">
          ● Typography system
        </Text>
        <Text textAlign="left" font="callout">
          ● Colorgraphy system
        </Text>
        <Text textAlign="left" font="callout">
          ● List of components and how to use them!
        </Text>
        <Text textAlign="left" font="callout">
          ● List of Views rendered in isolation
        </Text>
        <Text textAlign="left" font="callout">
          ● Project Documentation
        </Text>
        <Text textAlign="left" font="callout">
          ● Etc
        </Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text textAlign="left" font="body">
          Where do I go now?
        </Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text textAlign="left" font="callout">
          In order to get started, you can click below on{' '}
          <Text font="body">Navigation</Text> and select the story you wish to
          take a look.
        </Text>

        <Text textAlign="left" font="callout">
          On a selected story, you can click on <Text font="body">Addons</Text>{' '}
          and select either <Text font="body">Actions</Text> if you wanna check
          if 👇
        </Text>

        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <Button
            onPress={action('gotcha! it was clicked')}
            theme="dark"
            title="button"
            small
          />
        </View>
        <Text textAlign="left" font="callout">
          ☝️ has been clicked, and what are the things this click does. You can
          even this with this button right now! 🎉🥳
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text font="title3">Cool isn't it?</Text>
        <Text font="footnote">👇Check it out👇</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text textAlign="left" font="callout">
          have we talk about <Text font="body">knobs?</Text>
        </Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text textAlign="left" font="callout">
          Knobs are great! It allow us to preview the changes a component can
          have and also what props we can pass to than, which type of these
          props, an more!
        </Text>
      </View>
      <Text textAlign="left" font="callout">
        Simply click on
        <Text font="body"> Addons</Text> again, but now, checkout a tab called{' '}
        <Text font="body">knobs</Text>
      </Text>

      <Text textAlign="left" font="callout">
        Well, there you will have a switcher called "Click me!", if we click on
        it, it will basically change a boolean from false to true. this will
        trigger an action, based off of an component. Of couse, every component
        has its on action.
      </Text>

      <View style={{ marginVertical: 20 }}>
        <Text font="body">Let us try it out!? {'  '} (◕‿◕✿)</Text>
      </View>

      <View
        style={{
          marginVertical: 20,
          width: Layout.window.width,
        }}
      >
        <Toggle
          text="Here is a Toggle component:"
          on={boolean('Click me!', false)}
        />
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text textAlign="left" font="callout">
          on Addons/Knobs, click the switcher and see the magic happenning 😌
        </Text>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text font="body">Powerful isn't it? Well, let's do some work!</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 60, marginBottom: 20 }}>
        <Icon name="ValepayLogo" fill="dark" />
      </View>
    </ScrollView>
  </View>
));
