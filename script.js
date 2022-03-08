const vardi=['Olafs','Zintis','Georgs','Raitis','Guntis',];
const balvas=['IPhone 3','5$ Top Gift Card','Xbox','Žurka','Kāmis',]
let uzvaretajuSkaits =5 ;
let rindas = document.querySelector('.rindas'); //pievieno mainīgo
rindas.innerHTML='';



for (let i=0;i<uzvaretajuSkaits;i++){

  let rand = Math.random()*vardi.length;
  rand= Math.floor(rand); //noapaļo uz leju
  let uzvaretajs = vardi[rand];
  console.log(vardi[rand]);
  let laimests = balvas[rand];
  rindas.innerHTML+=`
  <tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
    <td>${laimests}</td>
  </tr>`
  
 }  

