import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfilePage from './ProfilePage';
import ReduxStateDecorator from '../../../client/redux/StateDecorator';
import data from '../../../server/models/data.json';

storiesOf('Pages | Profile', module)
  .addDecorator((story) => <div style={{ margin: '2rem' }}>{story()}</div>)
  .add('default', () => (
    <ReduxStateDecorator
      initialState={{
        config: {
          data,
        },
      }}
    >
      <ProfilePage profile={data.profile} />
    </ReduxStateDecorator>
  ));
