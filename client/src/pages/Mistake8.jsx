import { useEffect, useState } from "react";

const Mistake8 = () => {

    const [count, setCount] = useState(0);
    const [badCount, setBadCount] = useState(0);
    const [mode, setMode] = useState("Good");

    const goodCode = `
    const [count, setCount] = useState(0);

    useEffect(() => {

        const goodInterval = setInterval(() => {

            setCount(count + 1);

        }, 1000);

        return () => clearInterval(goodInterval);

    }, [mode, count]);
    `

    const badCode = `
    const [count, setCount] = useState(0);

    useEffect(() => {

        setInterval(() => {

            setCount(count + 1);

        }, 1000);

    }, [mode, count]); 
    `

    useEffect(() => {

        if (mode !== "Good") return;

        const goodInterval = setInterval(() => {

            setCount(count + 1);

        }, 1000);

        return () => clearInterval(goodInterval);

    }, [mode, count]);

    useEffect(() => {

        if (mode !== "Bad") return;

        setInterval(() => {

            setBadCount(badCount + 1);

        }, 1000);

    }, [mode, badCount]); 
     
    return(

        <div className="flex flex-col items-center mt-16">

            <h1>Stale Closure</h1>

            <div className="flex gap-2 py-4">

                <button
                    onClick={() => {
                        setMode("Bad");
                        setBadCount(0);
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

            <div className="mb-4">

                Count is : {mode === "Good" ? count : badCount}

            </div>
 
            <pre>
                {mode === "Good" ? goodCode : badCode}
            </pre>

        </div>

    );

};

export default Mistake8;