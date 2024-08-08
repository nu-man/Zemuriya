async function asyncRequest() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      reject(new Error("request failed"));
    } else {
      resolve("Request completed");
    }
  });
}

async function retryRequest(n, Delay = 1000) {
  for (let attempt = 0; attempt < n; attempt++) {
    try {
      const result = await asyncRequest();
      return result;
    } catch (error) {
      console.log(`Attempt ${attempt + 1} failed ${error.message}`);
      if (attempt < n - 1) {
        const delay = Delay * 2 ** attempt;
        console.log(`Retrying in ${delay} ms`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw new Error(`All ${n} attempts failed`)
}

(async function main(){
    try {
        const result=await retryRequest(5)
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
        
    }
})()
