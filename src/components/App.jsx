import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";


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
                <Input type="text" value={calc}/>
            </form>
            <div className="keypad">
                <Button className="grid-extended" name="clear" onClick={clear}/>
                <Button className="backspace grid" name="C" onClick={backspace}/>
                <Button className="operators grid" name="/" onClick={handleClick}/>
                <Button className="numbers grid" name="7" onClick={handleClick}/>
                <Button className="numbers grid" name="8" onClick={handleClick}/>
                <Button className="numbers grid" name="9" onClick={handleClick}/>
                <Button className="operators grid" name="*" onClick={handleClick}/>
                <Button className="numbers grid" name="4" onClick={handleClick}/>
                <Button className="numbers grid" name="5" onClick={handleClick}/>
                <Button className="numbers grid" name="6" onClick={handleClick}/>
                <Button className="operators grid" name="-" onClick={handleClick}/>
                <Button className="numbers grid" name="1" onClick={handleClick}/>
                <Button className="numbers grid" name="2" onClick={handleClick}/>
                <Button className="numbers grid" name="3" onClick={handleClick}/>
                <Button className="operators grid" name="+" onClick={handleClick}/>
                <Button className="numbers grid" name="." onClick={handleClick}/>
                <Button className="numbers grid" name="0" onClick={handleClick}/>
                <Button className="grid-extended grid-1" name="=" onClick={result}/>
            </div>
        </div>


    </>     ) 
    }

export default App;