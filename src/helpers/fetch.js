import config from 'Root/config';

export default async () => {
  const res = await global.fetch(config.server, {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  });

  return {
    res,
    data: await res.json(),
  };
};
