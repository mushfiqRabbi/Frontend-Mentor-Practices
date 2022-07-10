"use strict";

const nameMaker = (fname, lname) => {
  console.log(`${fname} ${lname}`);
};

const nameTaker = (one, two, three) => {
  three(one, two);
};

nameTaker("mushfiq", "rahman", nameMaker);
