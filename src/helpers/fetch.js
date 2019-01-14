import config from 'Root/config';

export default async (to) => {
  const res = await global.fetch(`${config.server}${to}`, {
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
