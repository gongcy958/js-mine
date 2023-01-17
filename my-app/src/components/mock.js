
const mfile = document.querySelector('#mfile');
const btn = document.querySelector('#btn')
const form = new FormData();
const url = 'http://192.168.1.205:8085/acquire/api/web/step/template';

btn.addEventListener('click', upload)

async function upload() {
    const file = mfile.files[0];
    form.append('multipartFile', file);
    form.append('tableName','test025')
    form.append('tableComment','注释1号')
    uploadAjaxApi()
    
}

function uploadAjaxApi() {
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.onload = function () {
        console.log(xhr.responseText)
    }
    xhr.send(form)
}

async function uploadAxiosApi(url, prams) {
    //基于axios
    return await axios.post(url, prams)
}