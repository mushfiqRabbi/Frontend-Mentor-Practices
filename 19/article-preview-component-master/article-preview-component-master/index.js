const shareTol = document.getElementsByClassName("share-tol")[0];

function showTol(el) {
  if (shareTol.style.display != "flex") {
    el.children[0].style.backgroundColor = "#6d7f97";
    el.children[0].style.color = "white";
    shareTol.style.display = "flex";
  } else {
    shareTol.style.display = "none";
    el.children[0].style.backgroundColor = "#ecf2f8";
    el.children[0].style.color = "#6d7f97";
  }
}
