const elBody = document.body;

console.log(elBody);

const para = document.createElement("p");
const text = document.createTextNode("This is a Paragraph");
para.appendChild(text);
para.className = "para";
elBody.appendChild(para);

const para0 = document.createElement("p");
para0.innerHTML = "This is new para";

elBody.insertBefore(para0, para);
console.log(para0.textContent);

console.log(elBody);
