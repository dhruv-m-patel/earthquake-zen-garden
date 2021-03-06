import React from 'react';
import { storiesOf } from '@storybook/react';
import DefaultHelmet from './DefaultHelmet';

storiesOf('Components | DefaultHelmet', module)
  .addDecorator((story) => <div style={{ margin: '2rem' }}>{story()}</div>)
  .add('with default props', () => (
    <React.Fragment>
      <DefaultHelmet />
      <p>Inspect page markup in HEAD section to know more.</p>
    </React.Fragment>
  ))
  .add('with overrides', () => (
    <React.Fragment>
      <DefaultHelmet title="My Custom Title" />
      <p>Inspect page markup in HEAD section to know more.</p>
    </React.Fragment>
  ));
