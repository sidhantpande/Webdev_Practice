/* Question -1:- ✅ Q1

Create a function where:

Outer function has variable a = 5
Inner function prints a
*/
function outer() {
    var a = 5;
    function inner() {
        console.log(a);
    }
    return inner;
}
const fn = outer();
fn();

/* 
Question-2:- 
✅ Q2

What will be output?

let x = 10;

function test() {
  let x = 20;
  console.log(x);
}

test();

Solution:- The output for this question would be:- 
20 as the let is inside the function test and as per the Scoped it checks the variable inside so hence it would give the result as the 20
*/

/* 
✅ Q3

What will this print?

let x = 10;

function outer() {
  let x = 20;

  function inner() {
    console.log(x);
  }

  inner();
}

outer();

it would print the value 20 because it would check it inside the function at first and then it would go out for checking for the other values but it gets the answer in it's first scope only 
*/

/*
✅ Q4 (IMPORTANT)
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn();
fn();
fn();

👉 Explain output also 

Solution:- it would print 0 everytime because when ever the function is called and then it finishes the work it just scraps the old work and start fresh everytime as the varibale is inside the function it is not stored permanently 
*/

/* 
✅ Q5 (TRICKY)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

👉 What is output? WHY?
I didn't understood this question can you please help me learn more about this topic but still trying this out let's see 

according to me it would run for 3 times and would push it in the stack queue at first 0, then 1 then 2 and then it would get printed as 
0 then 1 and then 2 Am I right?
✅ Q6 (FIX IT)

Fix the above code to print:

0
1
2

Didn't know what is wrong in it 

✅ Q7 (REAL THINKING)

Create a function:

It returns another function
That function should remember a value and increment it every time

👉 (Hint: closure but don’t worry if not perfect)

Solution for Q7:- 
*/

var x = 0;
function create(){
    return function(){
        x = x+1
        console.log(x)
    }
}
for(let i = 0; i<5; i++){
    create();
}