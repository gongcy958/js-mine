let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text';
request.setRequestHeader

request.onload = function() {
  poemDisplay.textContent = request.response;
};

request.send();

const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
myHeaders.append('Content-Type')
