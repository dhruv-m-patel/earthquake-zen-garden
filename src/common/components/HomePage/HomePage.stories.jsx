import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './HomePage';
import ReduxStateDecorator from '../../../client/redux/StateDecorator';
import data from '../../../server/models/data.json';

storiesOf('Pages | Home', module)
  .addDecorator((story) => <div style={{ margin: '2rem' }}>{story()}</div>)
  .add('default', () => (
    <ReduxStateDecorator
      initialState={{
        config: {
          data,
        },
      }}
    >
      <HomePage config={data} />
    </ReduxStateDecorator>
  ));
