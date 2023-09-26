export default function returnHowManyArguments(...Args) {
  let count = 0;
  for (let args of Args) {
    count += 1;   
  };
	
  return count;
}
