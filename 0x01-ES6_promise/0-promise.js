
function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      resolve('API response');
    }, 2000);
  });
}

export default getResponseFromAPI;
