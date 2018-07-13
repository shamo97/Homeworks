/*
when user clicks on remove element
function -> removeDivs happens;
*/
window.onload 
let y = document.getElementById("remove");
y.addEventListener("click", removeDivs);

/*
when user clicks on add element
function -> createDivs happens;
*/
let x = document.getElementById("add");
x.addEventListener("click", createDivs);

/*
when user clicks on update element
function -> update  happens;
*/
let z = document.getElementById("update");
z.addEventListener("click", update);


let stra = new Date("Sat Apr 28"); /* set the day to start our calendar */
let student = 12; /*default number of student is twelve */
let ind = 0; /*this variable  saves the amount of days */
let red = 0;  /*this variable  saves the amount of missed days */
let arr = []; /* this array saves the marks of each student */



/* function - createDiv creates Element typeof div
it becomes the child of "one (parent div element)"
and function returns this div
*/

function createDiv(i) {
    let second = document.createElement("div");
    second.className="element"
    second.classList.add(`element${i}`)
    one.appendChild(second);
    return one;
}
/*when createDivs happens the ind increases
create the array of length number of students plus one
push divs in array and make them childEmelements of div by className "my"
the every first child of this class has got the date cell with colour green
when we add new column of divs it's inner text got value of zero
and increase the number of red elements (the missed days);
after we create the elements then happens function -> click() -> explanation of function below
*/

function createDivs() {
    ind++;
    let board = document.getElementsByClassName("artc");
    let table = document.getElementsByClassName("table");
    myDivs = [],
        i = 0,
        numOfDivs = student + 1;
    one = document.createElement("div");
    one.className = "my";
    for (i; i < numOfDivs; i += 1) {
        myDivs.push(createDiv(i));
        board[0].appendChild(myDivs[i]);
        table[0].appendChild((myDivs[i]));
        if (i == 0) {
            myDivs[0].childNodes[0].textContent = getFormattedDate();
            myDivs[0].childNodes[0].style.backgroundColor = "green";
        }
    }
    let a = document.getElementsByClassName("average");
    for (let i = 1; i < 13; i++) {
        myDivs[0].children[i].textContent = 0;
        
       
        red++;
    }
    getAverage();
    
    click();
   
            

            
        

 }
 /*
 function returns the average mark of each student

 */
 function getAverage () {
    let arrs= [];
    let box = document.getElementsByClassName("my");
    let a = document.getElementsByClassName("average");
    for (let j = 1; j < 13; j++) {
                let sum= Array.from(
                 document.getElementsByClassName(`element${j}`)
               ).reduce(
                (acc, ele) => acc + parseFloat(ele.innerText),
                0
              );
             
               arrs[j]=(Number(sum));
               a[0].children[j].textContent = parseFloat(arrs[j] / ind).toFixed(2);
              }
            
            arr=arrs;
    
     
 }


/*
if user enters non-Number input computer asks to enter again
if input is higher than five textContent becomes five and color becomes green and we decrease the number of red elements
if input is lower than zero textContent becomes zero and color stays red
if input is between zero and five input becomes it and color is green
*/
function event1(event) {
       while (true) {
        let input = Number(prompt("enter only numbers"));
        if (!isNaN(input) && input != NaN) {
            if (input >= 5) {
                
                event.target.textContent = Number(5);
                event.target.style.backgroundColor = "rgba(89, 163, 89)";
                red--;
            } else if (input <= 0) {
                  event.target.textContent = Number(0.0);
            } else {
                
                event.target.textContent = input;
                event.target.style.backgroundColor = "rgba(89, 163, 89)";
                red--;
            }
            break;
        }
    }
    getAverage ();
  
}
/*
function -> click() by this function we set the every div of my class eventlistener
so the user can click and computer will asks for prompt
 function(index) ->  remebers the index of clicked div so we can remeber the mark of student
 on the same index in array;
*/

 function click() {
    let inde = 0;
    let box = document.getElementsByClassName("my");
    let av = document.getElementsByClassName("average");
    for (let i = 0; i < box.length; i++) {
        for (let j = 1; j < box[i].childElementCount; j++) {
            box[i].children[j].addEventListener("click", event1);
         
        }
    }
}

/*
function removeDivs -> by this function we remove the last child element
also decrease the number of ind
and also we fix the getDay() function
*/
function removeDivs() {
    let number = 0;
    let elem = document.getElementsByClassName("my");
    let element = document.getElementsByClassName("average");
    if (elem[0] != null) {
        for (let j = 1; j < 13; j++) {
            let color = window.getComputedStyle(elem[ind - 1].children[j], null).getPropertyValue('background-color');
            if (color == "rgba(255, 0, 0, 0.52)") {
                red--;
            }
          
           
        }
      
        elem[ind - 1].remove();
       
    }
    ind--;
    
  getAverage()

    if (ind < 0) {
        ind = 0
    }
    if(ind==0) {
        stra = new Date("Mon Apr 30");
        for (let j = 1; j < element[0].childElementCount; j++) {
         element[0].children[j].textContent="0.00";
        }
         

    }
    let day = stra.getDay();
    if (day == "3") {
        stra = new Date(stra.getTime() - 2 * (24 * 60 * 60 * 1000))
    }
    else if (day == "1") {
        stra = new Date(stra.getTime() - 2 * (24 * 60 * 60 * 1000));
    
    } else if (day == "6") {
        stra = new Date(stra.getTime() - (24 * 60 * 60 * 1000));
    }
    
    else if (day == "5") {
        stra = new Date(stra.getTime() - 2 * (24 * 60 * 60 * 1000));

    }

}
/*
for our statistcis we want our days to start from monday and to increase it by two
and when it becomes friday to increase by one
so if it  is monday we increase days by two and get wednesday and so on until we get friday
getDay() functions returnes the numbers 0-sunday, 1-monday and so on.
and then we return the string that contains day month and date
*/
function getFormattedDate() {
    let day = stra.getDay();

    if (day == "1") {
        stra = new Date(stra.getTime() + 2 * (24 * 60 * 60 * 1000))


    }
    else if (day == "3") {
        stra = new Date(stra.getTime() + 2 * (24 * 60 * 60 * 1000))


    }
    else if (day == "5") {
        stra = new Date(stra.getTime() + (24 * 60 * 60 * 1000));


    } else if (day == "6") {

        stra = new Date(stra.getTime() + 2 * (24 * 60 * 60 * 1000));

    }
   
    let strings = stra.toString();
    let string = strings.split(" ");
    return string[0] + " " + string[1] + " " + string[2];
}

/*
when user clicks update element on the left side site appears the statistic
it counts the number of missed days, number of students, number of days and average mark of students average
the number of average is rounded
*/
function update() {
    let number = 0;
    let e = document.getElementsByClassName("average");
    let ave = document.getElementById("Average");
    let tot = document.getElementById("Total");
    let miss = document.getElementById("Missed");
    let stude = document.getElementById("Stude");
    for (let j = 1; j < e[0].childElementCount; j++) {
        number += Number(e[0].children[j].textContent);
    }
    let a = parseFloat(number / student).toFixed(2);;
    if (ind == 0) {
        ave.innerText = "3.00";
        red = 0;
        miss.interText = red;
    }

    ave.innerText = a;
    tot.innerText = ind;
    miss.innerText = red;
    stude.innerText = e[0].childElementCount - 1;

}




















