import { useState } from "react";

const Mistake4 = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: 0,
    });

    const [mode, setMode] = useState("Bad");

    const badCode = `
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
    `

    const goodCode = `
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
    `
    const handleForm = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });

    };

    return(

        <div className="flex flex-col items-center">
            <h1>Multiple smaller ones instead of a single Object State</h1>

            <div className="flex gap-2 justify-center py-4">

                <button
                    onClick={() => {
                        setMode("Bad");
                        setUser({firstName: "", lastName: "", age: 0});
                    }}
                    className = "darthButtonRed" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                        setUser({firstName: "", lastName: "", age: 0});
                    }}
                    className = "darthButtonGreen"
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

            <pre>
                {mode === "Good" ? goodCode : badCode}
            </pre>

        </div>

    );

};

export default Mistake4;