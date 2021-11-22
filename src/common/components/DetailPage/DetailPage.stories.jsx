import React from 'react';
import { storiesOf } from '@storybook/react';
import DetailPage from './DetailPage';
import ReduxStateDecorator from '../../../client/redux/StateDecorator';
import data from '../../../server/models/data.json';

storiesOf('Pages | Details', module)
  .addDecorator((story) => <div style={{ margin: '2rem' }}>{story()}</div>)
  .add('default', () => (
    <ReduxStateDecorator
      initialState={{
        config: {
          data,
        },
      }}
    >
      <DetailPage featureId="nc72999021" config={data} />
    </ReduxStateDecorator>
  ));
