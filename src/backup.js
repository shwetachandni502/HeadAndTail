
import React, {useState, useEffect} from 'react'
import './App.css';
import { Button, Dropdown, Form } from 'react-bootstrap';

function HeadAndTail() {
    const [data, setData] = useState('');
    const [tail, setTail] = useState('');
    const [result, setResult] = useState([[]])
    const [lastvalue, setLastValue] = useState('default');

const handleChange = () => {
setLastValue(data)
let copyResult = [...result]
let lastarray = [];
//let lastvalue = ''
lastarray = copyResult[copyResult.length - 1];
console.log("last value anda data", lastvalue, data)
if(lastvalue === 'default') {
    let first = [];
let second = [...result]
first.push(data)
second.push(first)
setResult(second)
}
else 
if(data !== lastvalue && lastvalue!== undefined ){
    console.log("else if===", lastvalue)
    let iteration = 0;
    copyResult.forEach((el,index )=> {
        console.log("testing", el)
        for (let i = 0; i < el.length; i++) {
            if (el[i] !== data) {
                if(iteration === 0){
                    el.push(data)
                    iteration +=1
                }
            }
            else{
            
            }
        }
        console.log("after testing",el)
       
        // el.forEach((ele)=>{
        //     console.log("inside ele", ele, data)
        //     if(ele !== data){
        //         iteration +=1;
        //         if(iteration ===1 ){
        //             el.push(data);
        //         }
        //     }
        //     else{
                
        //     }
        // }) 
    })
}
else{
let first = [];
let second = [...result]
first.push(data)
second.push(first)
setResult(second)
}
}

    console.log("result", result)
  return (
    <div className="App">
     <p>Some Paragraph</p>
    
      <Form.Select onChange={(e) => setData(e.target.value)}>
        <option value ="">select</option>
        <option value="h">Head</option>
        <option value="t">Tail</option>
      </Form.Select>
      <br/>
     <h1 onClick={handleChange}> Submit</h1>
     <div>
      {result.map((child, index) => {
         return (
           <div key={index}>
              {child.map((dataItem, i) => {
                return (
                 <span key={i}>{dataItem}</span>
                )
               })}
           </div>
         )
       })}
     </div>
    </div>
  );
}

export default HeadAndTail;
