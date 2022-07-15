"use strict";

const docEl = document.documentElement;
const btnEl = document.querySelector("button");
const inEl = document.getElementById("input-email");
const msg = document.querySelector(".msg");

docEl.addEventListener("click", (e) => {
  if (e.target === btnEl && (inEl.value === "" || !inEl.checkValidity())) {
    msg.classList.remove("hidden");
    inEl.focus();
  } else if (!msg.classList.contains("hidden")) {
    msg.classList.add("hidden");
  }
});
