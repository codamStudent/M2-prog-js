let headers = document.getElementsByClassName("headerClass")
data = ['aaaaaaaaaaa','bbbbbbbbbbbbbb','ccccccccccc','dddddddddddd','eeeeeeeeeeeee']
console.log(headers);
headers[1].innerText = "aaaaaaaaa"
console.log(headers[1].innerText);
for (let index = 0, l = headers.length; index < l; index++) {
    const element = headers[index];
    element.innerText = index+': '+data[index]
}
// headers.forEach(function callBack(value, index) {
//     value.innerText = data[index];
// });
console.log(Object.entries(headers));