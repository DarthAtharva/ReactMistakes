import { useState } from "react";

const Mistake1 = () => {

    const [count, setCount] = useState(0);
    const [mode, setMode] = useState("Bad");

    const badCode = `
    <pre>
    const handleClick = () => {

        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

    };
    </pre>
    `

    const goodCode = `
    <pre>
    const handleClick = () => {

        setCount((prev => (prev + 1)));
        setCount((prev => (prev + 1)));
        setCount((prev => (prev + 1)));
        setCount((prev => (prev + 1)));

    };
    </pre>
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

        <div className="flex flex-col">
            <h1>State updates aren't immediate</h1>

            <div className="flex gap-2 justify-center py-4">

                <button
                    onClick={() => {
                        setMode("Bad");
                        setCount(0);
                    }}
                    className = "darthButton bg-red-500 text-gray-100" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                        setCount(0);
                    }}
                    className = "darthButton bg-green-500 text-gray-100"
                >
                    Show Good Example
                </button>

            </div>

            <div className="flex flex-col items-center">

                <button onClick={handleClick} className="darthButton bg-gray-200">{mode} Click</button>
                <p>Count is: {count}</p>

            </div>

            <div>{mode === "Good"? (
                <div dangerouslySetInnerHTML={{__html : goodCode}}/>
            ) : (
                <div dangerouslySetInnerHTML={{__html : badCode}}/>
            )}</div>

        </div>

    );

};

export default Mistake1;