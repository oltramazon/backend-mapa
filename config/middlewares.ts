export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:1337', 'https://3.tourvirtualonline.es', 'https://backend.emovere.eu', 'https://valuable-morning-542c934d15.strapiapp.com', 'http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:8083', 'http://localhost:8083', 'http://127.0.0.1:5500', 'http://localhost:5500', 'null'],
      headers: ['*'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
