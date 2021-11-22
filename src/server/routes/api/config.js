import * as DataSource from '../../models/datasource';

export default async function configRouter(router) {
  router.get('/', async (req, res, next) => {
    res.send(DataSource.getTestData());
  });
}
