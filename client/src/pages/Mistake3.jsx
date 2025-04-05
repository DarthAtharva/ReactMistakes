import { useState } from "react";

const Mistake3 = () => {

    const [user, setUser] = useState({name: "", age: 50});
    const [mode, setMode] = useState("Bad");

    const badCode = `
    <pre>
    const handleType = (e) => {

        setUser({
            name: e.target.value,
        })        

    };
    </pre>
    `

    const goodCode = `
    <pre>
    const handleType = (e) => {

        setUser({
            ...user,
            name: e.target.value,
        })        

    };
    </pre>
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

        <div className="flex flex-col">
            <h1>State updates aren't immediate</h1>

            <div className="flex gap-2 justify-center py-4">

                <button
                    onClick={() => {
                        setMode("Bad");
                        setUser({name: "", age: 50});
                    }}
                    className = "darthButton bg-red-500 text-gray-100" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                        setUser({name: "", age: 50});
                    }}
                    className = "darthButton bg-green-500 text-gray-100"
                >
                    Show Good Example
                </button>

            </div>

            <div className="flex flex-col items-center">

                <input 
                    type="text"
                    placeholder="Type in your name"
                    className="bg-amber-100 rounded p-2"
                    onChange={handleType}    
                />

                <div>
                    <p>User: {JSON.stringify(user)}</p>
                </div>
                

            </div>

            <div>{mode === "Good"? (
                <div dangerouslySetInnerHTML={{__html : goodCode}}/>
            ) : (
                <div dangerouslySetInnerHTML={{__html : badCode}}/>
            )}</div>

        </div>

    );

};

export default Mistake3;