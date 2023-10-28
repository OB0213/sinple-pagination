import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';

function App() {
  const arraydata=["Pune","Mumbai","Satara","Nashik","Kolhapur","Thane","Raigad","Sangli","Ratnagiri","Sindhudurg","Ahmednagar","Palghar","Dhule","Jalgaon","Nandurbar","Chh. Sambhajinagar","Jalna","Solapur","Dharashiv","Hingoli","Latur","Parbhani","Nanded","Amravati","Buldhana","Wardha","Nagpur","Yavatmal","Chandrapur"];
  const [currentIndex,setCurrentIndex]=useState(1);
  const arrayspan=5;
  const endIndex=currentIndex*arrayspan;
  const startIndex=endIndex-arrayspan;
  const data=arraydata.slice(startIndex,endIndex);

  function SetFunction(values)
  {
    setCurrentIndex(values);
  }
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>DISTRICTS OF MAHARASHTRA</h1>
    <Component1 data={data} />
    <Component2 arraylength={arraydata.length} arrayspan={arrayspan} myfunction={SetFunction} currentIndex={currentIndex}></Component2>
    </div>
  );
}

export default App;
