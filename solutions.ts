function multiplyValue(value: number, multiplier?: number): number{
  
  if(multiplier){
    return value * multiplier;
  }
  else if(multiplier === 0){
    return value * 0;
  }
  else{
    return value * 2;
  }
}

type TInput = string | number | boolean;
type TOutput = string | number;

function processInput(input: TInput ): TOutput {
  
  if(typeof input === "string"){
    return input.trim().toLowerCase();

  }else if(typeof input === "number"){
    return input * 10;

  }else{
    return input === true? "Active" : "Inactive"
  }
}


function formatCoordinate(coordinates: readonly[number, number, string]): string {
  const [latitude, longitude, locationName] = coordinates;
  return `Location: ${locationName} (${latitude}, ${longitude})`
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}





