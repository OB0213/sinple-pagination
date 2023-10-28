import React from 'react';
import './styles2.css'

function Component2({arraylength,arrayspan,myfunction,currentIndex}) {
    let myarray=[];
    let mydata=Math.ceil(arraylength/arrayspan);
    console.log(mydata);
    for(let i=1;i<=mydata;i++)
    {
        myarray.push(i);
    }

  return (
    <ul className='mydiv'>
      {
        myarray.map((values)=>
        <li className={currentIndex===values?"listpart active":"listpart"} onClick={()=>myfunction(values)}>
            {values}
        </li>
        )
      }
    </ul>
  )
}

export default Component2
