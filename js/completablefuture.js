// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// // 类似于ComplateFuture的all方法

// Promise.all([fetchPromise1,fetchPromise2,fetchPromise3]).then(responses => {
//     for (const response of responses){
//         console.log(`${response.url}：${response.status}`);
//     }
// }).catch( error => {
//     console.error(`获取失败：${error}`)
//   });


//   async function myFunction(){
//     console.log("这是一个一步函数")
//   }


//   async function fetchProducts(){
//     try{
//         const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
//     if (!response.ok) {
//         throw new Error(`HTTP 请求错误：${response.status}`);
//       }

//       const json = await response.json();
//     console.log(json[0].name);
//     }catch(error){
//         console.error(`无法获取产品列表：${error}`);
//     }
//   }


// async function fetchProducts() {
//     try {
//       const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//       if (!response.ok) {
//         throw new Error(`HTTP 请求错误：${response.status}`);
//       }
//       const json = await response.json();
//       return json;
//     }
//     catch(error) {
//       console.error(`无法获取产品列表：${error}`);
//     }
//   }
  
//   const json = fetchProducts();
//   console.log(json[0].name);

