import * as DataSource from '../models/datasource';

export default async function index(router) {
  router.get('/', async (req, res, next) => {
    req.initialState = {
      ...req.initialState,
      config: {
        ...req.initialState?.config,
        data: DataSource.getTestData(),
      },
    };

    next();
  });
}
