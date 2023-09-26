export default function returnHowManyArguments(...Args) {
  let count = 0;
  for (const args of Args) {
    count += 1;   
  }
	
  return count;
}
