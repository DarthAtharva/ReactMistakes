import { useEffect, useState } from "react";

const Mistake6 = () => {

    const [itemCount, setItemCount] = useState({
        value : "some value",
        value_ : 0
    });

    const [mode, setMode] = useState("Bad");

    console.log("Rerendering Mistake6 component");

    const badCode = `
    <pre>
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
    </pre>
    `

    const goodCode = `
    <pre>
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

    </pre>
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

        <div className="flex flex-col">

            <h1>Primitives vs Non-Primitives; Objects are called by referenced unlike const, bool, etc in JS</h1>

            <div className="flex gap-2 justify-center py-4">

                <button
                    onClick={() => {
                        setMode("Bad");
                    }}
                    className = "darthButton bg-red-500 text-gray-100" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                    }}
                    className = "darthButton bg-green-500 text-gray-100"
                >
                    Show Good Example
                </button>

            </div>

            <div className="flex justify-center">
                <button
                    className="darthButton bg-gray-100"
                    onClick={handleClick}
                >Click!</button>
            </div>
 
            <div>{mode === "Good"? (
                <div dangerouslySetInnerHTML={{__html : goodCode}}/>
            ) : (
                <div dangerouslySetInnerHTML={{__html : badCode}}/>
            )}</div>

        </div>

    );

};

export default Mistake6;