// var select = document.querySelector("select");
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {

//     var choice = select.value;

//     if (choice === 'sunny') {
//         para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//     } else if (choice === 'rainy') {
//         para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
//     } else if (choice === 'snowing') {
//         para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//     } else if (choice === 'overcast') {
//         para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//     } else {
//         para.textContent = '';
//     }
// }

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener("click",function(){
    let searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(':');
        if (splitContact[0].toLowerCase() === searchName) {
          para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
          break;
        } else if (i === contacts.length - 1) {
          para.textContent = 'Contact not found.';
        }
      }
});