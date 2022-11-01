const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

// 类似于字面量 引用都是这个fetchPromise对象 
fetchPromise.then( response => {console.log(`已收到响应：${response.status}`)})

fetchPromise.then( a => {console.log(`收到响应了吗：${a.status}`)})

console.log("已发送请求...")


// 嵌套调用

fetchPromise.then( promise1 => {
    const jsonPromise = promise1.json();
    jsonPromise.then( promise2 => {
        console.log(promise2[0].name);
    })
})

// then本身返回Promise对象，也可以写成这种

fetchPromise
.then( promise1 => {
    return promise1.json();
})
.then( promise2 => {
    console.log(json[0].name);
})
.catch( error => {
    console.error(`无法获取产品列表：${error}`);
})

