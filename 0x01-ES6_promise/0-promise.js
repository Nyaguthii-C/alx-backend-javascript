// return a promise for the function
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const successMessage = 'successful message or data retrieved';
    setTimeout(() => {
      console.log(`Yay! some message ${successMessage}`);
      resolve('some data fromthe API');
    }, 2000);
  });
}
export default getResponseFromAPI;
