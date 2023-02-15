export const getAllCounties = async () => {
  const url = "https://murmuring-cliffs-65490.herokuapp.com/api/v1/counties";
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};
