import { useState } from "react";

const Mistake4 = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: 0,
    });

    const [mode, setMode] = useState("Bad");

    const badCode = `
    <pre>

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);

    const handleFirstName = (e) => {

        setFirstName({
            ...user,
            firstName: e.target.value,
        });

    };

    const handleLastName = (e) => {

        setLastName({
            ...user,
            lastName: e.target.value,
        });

    };

    const handleAge = (e) => {

        setAge({
            ...user,
            age: e.target.value,
        });

    };

    </pre>
    `

    const goodCode = `
    <pre>

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: 0,
    });

    const handleForm = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });

    };
    </pre>
    `
    const handleForm = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });

    };

    return(

        <div className="flex flex-col">
            <h1>Object state instead of multiple smaller ones</h1>

            <div className="flex gap-2 justify-center py-4">

                <button
                    onClick={() => {
                        setMode("Bad");
                        setUser({firstName: "", lastName: "", age: 0});
                    }}
                    className = "darthButton bg-red-500 text-gray-100" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                        setUser({firstName: "", lastName: "", age: 0});
                    }}
                    className = "darthButton bg-green-500 text-gray-100"
                >
                    Show Good Example
                </button>

            </div>

            <form className="flex flex-col items-center gap-2">

                <input 
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    className="bg-amber-100 rounded p-2"
                    onChange={handleForm}    
                />

                <input 
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    className="bg-amber-100 rounded p-2"
                    onChange={handleForm}    
                />

                <input 
                    type="number"
                    placeholder="Age"
                    name="age"
                    className="bg-amber-100 rounded p-2"
                    onChange={handleForm}    
                />

                <div>{JSON.stringify({user})}</div>

            </form>

            <div>{mode === "Good"? (
                <div dangerouslySetInnerHTML={{__html : goodCode}}/>
            ) : (
                <div dangerouslySetInnerHTML={{__html : badCode}}/>
            )}</div>

        </div>

    );

};

export default Mistake4;