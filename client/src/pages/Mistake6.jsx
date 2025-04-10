import { useEffect, useState } from "react";

const Mistake6 = () => {

    const [itemCount, setItemCount] = useState({
        value : "some value",
        value_ : 0
    });

    const [mode, setMode] = useState("Bad");

    console.log("Rerendering Mistake6 component");

    const badCode = `
    const [itemCount, setItemCount] = useState({
        value : "some value",
        value_ : 0
    });

    const handleClick = () => {
        setItemCount({
            value : "some value",
            value_ : 0
        });
    };

    useEffect(() => {
        //Logs below string
        console.log("Nayan Ra*nd");
    }, [itemCount.value]);
    `

    const goodCode = `
    const [itemCount, setItemCount] = useState({
        value : "some value",
        value_ : 0
    });
    
    const handleClick = () => {
        setItemCount({
            value : "some value",
            value_ : 0
        });
    };

    useEffect(() => {
        //Doesn't logs below string
        console.log("Nayan Ra*nd");
    }, [itemCount.value]);
    `
    const handleClick = () => {
        setItemCount({
            value : "some value",
            value_ : 0
        });
    };

    useEffect(() => {
        //If dependency array is changed, some critical function gets called
        console.log("Nayan Ra*nd");
    }, [itemCount.value]);

    return(

        <div className="flex flex-col items-center">

            <h1>Primitives vs Non-Primitives; Objects are called by referenced unlike const, bool, etc in JS</h1>

            <div className="flex gap-2 py-4">

                <button
                    onClick={() => {
                        setMode("Bad");
                    }}
                    className = "darthButtonRed" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                    }}
                    className = "darthButtonGreen"
                >
                    Show Good Example
                </button>

            </div>

            <button
                className="darthButtonClick"
                onClick={handleClick}
            >Click!</button>

            <pre>
                {mode === "Good" ? goodCode : badCode}
            </pre>

        </div>

    );

};

export default Mistake6;