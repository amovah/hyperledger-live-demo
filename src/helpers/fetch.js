export default async (url, options) => {
  const res = await global.fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  });

  return {
    res,
    data: await res.json(),
  };
};
