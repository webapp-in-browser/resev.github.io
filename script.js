
let mas =['1','2','3','4','5','6','7','8','9',
'10','11','12','13','14','15','16','17',
'18','19','20','21','22','23','24',
'25','26','27','28']



let section = document.getElementById("section");

let click = section.getElementsByTagName('li');

for (let i = 0; i < click.length; i ++) {
  
  
  click[i].onclick = function(){


         let id = this.getAttribute("id");

         if(id == mas[0]) {

         document.location.href = "https://andrey-berlin.github.io/FrontEndBackEndResurs/";


        } /*else if (id == 2) {




        }*/

      }

    }