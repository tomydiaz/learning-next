import fetch from "node-fetch";

export const getSitesFromApi = async () => {
  const apiHost = process.env.BREEZE_API;
  const endPoint = `${apiHost}/sites`;
  const res = await fetch(endPoint, []);
  let sites;
  try {
    const res = await fetch(endPoint, []).catch(function (error) {
      console.debug("### FETCH ERR: ", error);
    });

    const sitesFetchResponse = await res.json();

    sites = sitesFetchResponse.body;

    return sites;
  } catch (err) {
    console.debug("### FETCH CATCH ERR: ", err);
    return [];
  }
};
