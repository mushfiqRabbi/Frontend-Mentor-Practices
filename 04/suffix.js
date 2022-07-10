const str = "xyxxxyxxyxxyxxxyxxyxxxyxxyxxxyxxyxxyxxxyx";

let arr = [];

for (let i = str.length - 1; i > 0; i--) {
  arr.length = 0;
  for (let j = i; j < str.length; j++) {
    // console.log("value of j ", j);
    arr.push(str[j]);
  }

  console.log(arr);
}
