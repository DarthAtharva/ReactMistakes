import { useState } from "react";

const Mistake1 = () => {

    const [count, setCount] = useState(0);
    const [mode, setMode] = useState("Bad");

    const badCode = `
    const handleClick = () => {

        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

    };
    `

    const goodCode = `
    const handleClick = () => {

        setCount((prev => (prev + 1)));
        setCount((prev => (prev + 1)));
        setCount((prev => (prev + 1)));
        setCount((prev => (prev + 1)));

    };
    `
    const handleClick = () => {

        if(mode === "Bad"){

            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);

        }else{

            setCount((prev => (prev + 1)));
            setCount((prev => (prev + 1)));
            setCount((prev => (prev + 1)));
            setCount((prev => (prev + 1)));

        }

    };

    return(

        <div className="flex flex-col items-center mt-16">
            <h1>State updates aren't immediate</h1>

            <div className="flex justify-center mt-2">

                <button
                    onClick={() => {
                        setMode("Bad");
                        setCount(0);
                    }}
                    className = "darthButtonRed" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                        setCount(0);
                    }}
                    className = "darthButtonGreen"
                >
                    Show Good Example
                </button>

            </div>

            <button 
                onClick={handleClick}
                className="darthButtonClick"
                >
                {mode} Click
            </button>
            
            <p>Count is: {count}</p>

            <pre>
                {mode === "Good" ? goodCode : badCode}
            </pre>

        </div>

    );

};

export default Mistake1;