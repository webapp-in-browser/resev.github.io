
let mas1 =['1','2','3','4','5','6','7','8','9',
'10','11','12','13','14','15','16','17',
'18','19','20','21','22','23','24',
'25','26','27','28']



let section = document.getElementById("section");

let click = section.getElementsByTagName('li');

for (let i = 0; i < click.length; i ++) {
  
  
  click[i].onclick = function(){


         let id = this.getAttribute("id");

         if(id == mas1[0]) {

         document.location.href = "https://andrey-berlin.github.io/FrontEndBackEndResurs/";


        } /*else if (id == 2) {




        }*/

      }

    }


let mas = ['😀','😉','😏'];


let myInterval = setInterval(myTimer, 1000);



function myTimer() {

    let ai3 = Math.floor(Math.random()*3)+0;

    console.log(ai3);
  
    let timer1 = document.getElementById("timer1").innerHTML = mas[`${ai3}`];

    console.log(timer1);
  
}




    //clearInterval(myInterval);

  



/*function myStopFunction() {
  clearInterval(myInterval);
}*/

function timer() {
  
  const interval_time = setInterval(clock, 1000);
  
  function clock() {
    
    const clock = new Date ();
    
   let date = document.getElementById("date");
   date.innerHTML = clock.toLocaleDateString();
   let timer = document.getElementById('timer');
   timer.innerHTML = 
    clock.toLocaleTimeString();
    
    
  }
  
}
timer();
