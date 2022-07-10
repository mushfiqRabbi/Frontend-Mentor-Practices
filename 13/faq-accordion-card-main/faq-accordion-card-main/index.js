let elQa = document.getElementById("q&a");
// console.log(elQa);
let allChild = elQa.children;
// console.log(allChild);

elQa.addEventListener("click", function (event) {
  for (let el of allChild) {
    if (el.children[0] === event.target) {
      el.children[0].style.color = "black";
      el.children[0].style.fontSize = "14px";
      el.children[0].style.fontWeight = "700";
      el.children[0].addEventListener("mouseover", function () {
        el.children[0].style.color = "black";
        el.children[0].style.fontSize = "14px";
        el.children[0].style.fontWeight = "700";
      });
      el.children[0].addEventListener("mouseout", function () {
        el.children[0].style.color = "black";
        el.children[0].style.fontSize = "14px";
        el.children[0].style.fontWeight = "700";
      });
      el.children[1].style.display = "block";
    } else {
      el.children[0].style.color = "#4a4b5e";
      el.children[0].style.fontSize = "13px";
      el.children[0].style.fontWeight = "400";
      el.children[0].addEventListener("mouseover", function () {
        el.children[0].style.color = "#f47c57";
        el.children[0].style.fontWeight = "700";
      });
      el.children[0].addEventListener("mouseout", function () {
        el.children[0].style.color = "#4a4b5e";
        el.children[0].style.fontWeight = "400";
      });
      el.children[1].style.display = "none";
    }
  }
});
