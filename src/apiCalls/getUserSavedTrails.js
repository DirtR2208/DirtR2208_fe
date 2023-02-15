export const getUserSavedTrails = async (id) => {
  const url = `https://murmuring-cliffs-65490.herokuapp.com/api/v1/user?id=${id}`;
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};
