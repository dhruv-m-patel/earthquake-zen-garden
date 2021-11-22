import { RSAA } from 'redux-api-middleware';

export const Actions = {
  Config: {
    FetchConfigPending: 'FetchConfigPending',
    FetchConfigCompleted: 'FetchConfigCompleted',
    FetchConfigFailed: 'FetchConfigFailed',
  },
};

export function generateRequest({ body, ...options }) {
  return {
    [RSAA]: {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: body && JSON.stringify(body),
      ...options,
    },
  };
}

export const fetchConfiguration = () =>
  generateRequest({
    endpoint: '/api/config',
    types: [
      Actions.Config.FetchConfigPending,
      Actions.Config.FetchConfigCompleted,
      Actions.Config.FetchConfigFailed,
    ],
  });
