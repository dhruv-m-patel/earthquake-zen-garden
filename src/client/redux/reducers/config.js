import { Actions } from '../actions';

export const defaultState = {
  isFetching: false,
  error: undefined,
  data: undefined,
};

export default function configReducer(
  state = defaultState,
  action = { type: undefined }
) {
  const { payload } = action;
  switch (action.type) {
    case Actions.Config.FetchConfigPending:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      };

    case Actions.Config.FetchConfigCompleted:
      return {
        ...state,
        isFetching: false,
        data: payload,
      };

    case Actions.Config.FetchConfigFailed:
      return {
        ...state,
        isFetching: false,
        error: 'There was an error retrieving configuration',
      };

    default:
      return state;
  }
}
