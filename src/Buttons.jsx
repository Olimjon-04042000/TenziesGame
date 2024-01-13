import {useState} from 'react'



function Buttons() {


  const [count, useCount]= useState([])
const  arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let number=()=>Math.floor(Math.random()*10);
const massiv=[...count];
if(massiv.length==0){
  arr.forEach(element=>{
    massiv.push({
      id:element,
      btnValue:number(),
      completed:false
    })
})
  useCount(massiv);
}

const [isClicked,setIsClicked]=useState(false);

const handleBtn=()=>{
  setIsClicked(!isClicked);
}


   return (
     <div className="btns">
      {
        count.map(a=>{
          return <button className="btn " onClick={handleBtn} style={{ backgroundColor: isClicked ? 'rgb(5, 215, 5)' : '' }}
          >{a.btnValue}</button>
        })
      }

     </div>
   )
 }
 
 export default Buttons