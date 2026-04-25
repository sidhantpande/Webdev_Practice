// Question -1
const Displaylist1 = document.getElementById("Displaylist1");
const CreateList = document.getElementById("CreateList");
let NumList = [];
CreateList.addEventListener("click", function () {
  const repeatNum = document.getElementById("repeatNum");
  const repeatNum1 = repeatNum.value;
  const Num = Number(repeatNum1);
  for (let i = 0; i <= Num; i++) {
    NumList.push(i);
    Displaylist1.innerText = JSON.stringify(NumList);
    console.log(i);
  }
});

//Question -2

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const a = document.getElementById("anumber");
  const av = a.value;
  const iav = Number(av);
  const b = document.getElementById("bnumber");
  const bv = b.value;
  const ibv = Number(bv);
  const solution = document.getElementById("solution");
  const ans = iav + ibv;
  solution.textContent = ans;
  console.log(ans);
});

// Question 3
let mydata = [10,20,30,40,50];
let n = mydata.length;
for(let i=0; i<n; i++){
    console.log(mydata[i]);
}

//Question 4
const person = {
    name : "Sidhant",
    age : 21,
    city : "Pusad"
}
console.log(person.name);