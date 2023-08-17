export const getCrypto = async () => {
  try {
    const response = await fetch(
      'http://api.coinlayer.com/list?access_key=8aa1f7b27093fe8a7514c8ed839e2db8'
    );

    const data = await response.json();
    console.log(data);
    return Object.values(data.crypto);
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    return [];
  }
};
