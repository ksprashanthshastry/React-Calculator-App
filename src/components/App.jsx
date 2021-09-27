import React, { useState } from "react";


function App(){


    const [calc, setCalc] = useState("");

    function handleClick(event){
        const name = event.target.name;
        setCalc(calc.concat(name))    
    }

    function clear(){
        setCalc("")
    }

    function backspace(){
        setCalc(calc.slice(0, -1))
    }

    function result(){
        try {
            setCalc(eval(calc).toString());          
        } catch (error) {
            setCalc("Error")            
        } 
    }

    return (<>

        <div className="container">
            <form>
                <input type="text" value={calc} ></input>
            </form>
            <div className="keypad">
                <button className="grid-extended" name="clear" onClick={clear}>Clear</button>
                <button className="backspace grid" name="backspace" onClick={backspace}>C</button>
                <button className="operators grid" name="/" onClick={handleClick}>&divide;</button>
                <button className="numbers grid" name="7" onClick={handleClick}>7</button>
                <button className="numbers grid" name="8" onClick={handleClick}>8</button>
                <button className="numbers grid" name="9" onClick={handleClick}>9</button>
                <button className="operators grid" name="*" onClick={handleClick}>&times;</button>
                <button className="numbers grid" name="4" onClick={handleClick}>4</button>
                <button className="numbers grid" name="5" onClick={handleClick}>5</button>
                <button className="numbers grid" name="6" onClick={handleClick}>6</button>
                <button className="operators grid" name="-" onClick={handleClick}>-</button>
                <button className="numbers grid" name="1" onClick={handleClick}>1</button>
                <button className="numbers grid" name="2" onClick={handleClick}>2</button>
                <button className="numbers grid" name="3" onClick={handleClick}>3</button>
                <button className="operators grid" name="+" onClick={handleClick}>+</button>
                <button className="numbers grid" name="." onClick={handleClick}>.</button>
                 <button className="numbers grid" name="0" onClick={handleClick}>0</button>
                <button className="grid-extended grid-1" name="=" onClick={result}>=</button>
            </div>
        </div>


    </>     ) 
    }

export default App;