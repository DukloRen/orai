/*const t1=['alma', 'körte', 'cseresznye', 'szilva', 'eper'];
//Az eredeti módosítja!
const t1Rendezett=t1.map(s=>s.toUpperCase()).sort();

const t1Hossz=t1.map(s=>s.toUpperCase()).sort((a,b)=>{
  if (a.length<b.length){
    return -1;
  } else if (a.length>b.length){
    return 1;
  }else{
    return 0;
  }
});

console.log(t1);
console.log(t1Rendezett);
console.log(t1Hossz);

const t2 = [1,5678,1500,200,-89,-8,1.5]
/*t2.sort((a,b)=>{
  if (a<b){
    return -1;
  } else if (a>b){
    return 1;
  }else{
    return 0;
  }
});
t2.sort((a,b)=>a-b).forEach(e=>{
  console.log(e)
});
//t2.filter().map().sort().forEach();
console.log(t2);*/


import dogs from './dogs.json';

const eletkor_list = dogs.sort((a, b) => {

  if (a.eletkor != b.eletkor) {

     return (a.eletkor - b.eletkor);

  } else {

    return (a.nev.localeCompare(b.nev));

  }
});
console.log(eletkor_list);


const labrador_list_1 = dogs.filter(s => s.fajta == "Labrador").map(s => {

  return `${s.nev} (${s.eletkor} éves)`;

});

console.log(labrador_list_1);

 

const labrador_list_2 = dogs.filter(s => s.fajta == "Labrador").map(s => ({

  nev: s.nev,

  eletkor: s.eletkor

}));

console.log(labrador_list_2);

const old_list=dogs.filter(s=>s.eletkor>10).map(s=>{
  return `${s.gazda_neve}`;
});
console.log(old_list);


const race_list = (x, y) =>{

  return x.filter(dog => dog.fajta == y).length;

}

const m = new Map();

dogs.forEach(e => {

  if (!m.has(e.fajta)) {

    m.set(e.fajta, race_list(dogs, e.fajta));
    
  }
});

console.log(m);

