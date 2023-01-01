
import React, {useState} from 'react'
import './App.css';
import { Form } from 'react-bootstrap';

const HeadAndTail = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [result, setResult] = useState({}); //HINT: {0: {rowString: 'THT', lastEnteredChar: 'T'}, 1: ...}
    
    const handleChange = () => {
        let resultToSet = {};
        let numberOfIterations = Object.keys(result).length !== 0 ? Object.keys(result).length - 1 : 1;

        for (let rowIndex = 0; rowIndex <= numberOfIterations; rowIndex++) {
            const {nextRowIndex: rowToChangeIndex, shouldBreakLoop} = getRowIndex({rowIndex, result});
            resultToSet = appendCharToRow({rowToChangeIndex, result, selectedValue});
            if (shouldBreakLoop) {
              break;
            }
        }
        setResult(resultToSet);
    }

    function getRowIndex({rowIndex, result}) {
      let nextRowIndex = null;
      
      //HINT: shouldBreakLoop -> true when (1. rowString.lastEnteredChar != selectedValueInDropdown, 2. if result == {} means rows.length == 0)
      let shouldBreakLoop = null;
        if (result[rowIndex]) {
            if (result[rowIndex].lastEnteredChar === selectedValue) {
               nextRowIndex = rowIndex + 1;
            }
            else {
                nextRowIndex =  rowIndex;
                shouldBreakLoop = true;
            }
        } 
        else {
            nextRowIndex = rowIndex;
            shouldBreakLoop = true;
        }
        return {nextRowIndex, shouldBreakLoop};
    }
    
    function appendCharToRow({rowToChangeIndex, result, selectedValue}) {
        //HINT: this is the result object that is going to be after we append the char.
        let nextResult = {...result};

        //HINT: !! typecasts a value to boolean, ! reverses the boolean (true -> false, false -> true), !!! means (typecast too bolean then check if it is false)
        if (!!!nextResult[rowToChangeIndex]) {
            nextResult[rowToChangeIndex] = {rowString: '', lastEnteredChar: ''};
        } 
            const nextRowString = nextResult[rowToChangeIndex].rowString + selectedValue;
            const nextLastEnteredChar = selectedValue;
            nextResult = {...nextResult, [rowToChangeIndex]: {rowString: nextRowString, lastEnteredChar: nextLastEnteredChar}};
            return nextResult;
    } 

  return (
    <div className="App">
      <div className="Head">
        <div className='Form'>
      <Form.Select onChange={(e) => setSelectedValue(e.target.value)}>
        <option value ="">select</option>
        <option value="h">Head</option>
        <option value="t">Tail</option>
      </Form.Select>
      </div>
      <br/>
     <h1 onClick={handleChange}> Submit</h1>
     <div>
      {Object.values(result).map((row, index) => {
         return (
           <div key={index}>
                 <span key={index}>{row.rowString}</span>
           </div>
         )
       })}
     </div>
     </div>
    </div>
  );
}

export default HeadAndTail;
