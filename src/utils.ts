export const firstCharToUpperCase = (str: string) : string =>  {

    let newStr: string = str
    .split(" ")
    .map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
    
    return newStr;
}

