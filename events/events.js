let btn = document.getElementById("btn")
btn.addEventListener("click", (e) => {
    console.log("click");
    const para = document.createElement("p"), img = document.createElement("img"); 
    const node = document.createTextNode("This is new.");
    img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
    // let body = document.getElementById("body");
    para.appendChild(node);
    document.body.appendChild(para);
    document.body.appendChild(img);
})