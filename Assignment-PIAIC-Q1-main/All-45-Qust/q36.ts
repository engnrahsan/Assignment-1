// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


let make_shirt=(size: string, message: string)=> {
    console.log(`You've ordered a ${size}-sized shirt with the message: "${message}".`);
}
  
  // Call the function with your desired size and message
  make_shirt("Large", "I am Legend");
  export{}