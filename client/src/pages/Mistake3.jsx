import { useState } from "react";

const Mistake3 = () => {

    const [user, setUser] = useState({name: "", age: 50});
    const [mode, setMode] = useState("Bad");

    const badCode = `
    const handleType = (e) => {

        setUser({
            name: e.target.value,
        })        

    };
    `
    const goodCode = `
    const handleType = (e) => {

        setUser({
            ...user,
            name: e.target.value,
        })        

    };
    `
    const handleType = (e) => {

        if(mode === "Bad"){

            setUser({
                name: e.target.value,
            })   

        }else{

            setUser({
                ...user,
                name: e.target.value,
            }) 

        }

    };

    return(

        <div className="flex flex-col items-center mt-16">
            <h1>State updates aren't immediate</h1>

            <div className="flex justify-center mt-2">

                <button
                    onClick={() => {
                        setMode("Bad");
                        setUser({name: "", age: 50});
                    }}
                    className = "darthButtonRed" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                        setUser({name: "", age: 50});
                    }}
                    className = "darthButtonGreen"
                >
                    Show Good Example
                </button>

            </div>

            <div>

                <input 
                    type="text"
                    placeholder="Type in your name"
                    className="bg-amber-100 rounded p-2 mb-2"
                    onChange={handleType}    
                />

                <div>
                    <p>User: {JSON.stringify(user)}</p>
                </div>
                

            </div>

            <pre>
                {mode === "Good" ? goodCode : badCode}
            </pre>

        </div>

    );

};

export default Mistake3;