import config from 'Root/config';

export default async () => {
  const res = await global.fetch(config.proxy, {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  });

  console.log(res);

  // return {
  //   res,
  //   data: await res.json(),
  // };
};
