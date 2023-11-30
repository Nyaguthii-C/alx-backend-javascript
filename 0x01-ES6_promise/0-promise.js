// return a promise for the function
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const successMessage = 'successful message or data retrieved';
    const errorSimulation = true;

    setTimeout(() => {
      if (errorSimulation) {
        reject(new Error('Error: Unable to retrieve data from the API'));
      } else {
        console.log(`Yay! some message ${successMessage}`);
        resolve('some data fromthe API');
      }
    }, 2000);
  });
}
export default getResponseFromAPI;
