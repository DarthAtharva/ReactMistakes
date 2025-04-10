import { useState } from "react";

const Mistake2 = ({id}) => {

    const badCode = `
    <h1>Bad Example</h1>
    <p>Hooks are used conditionally below — this will break React rules!</p>
 
    if (!id) {
    return &lt;p&gt;No ID Provided&lt;/p&gt;
    }

    const [something, setSomething] = useState("blablabla");
    useEffect(() => {}, [something]);

    return (...something);
    `;

    const goodCode = `
    <h1>Good Example</h1>
    <p>Hooks are always called before any return — this is correct!</p>

    const [something, setSomething] = useState("blablabla");
    useEffect(() => {}, [something]);

    if (!id) {
    return &lt;p&gt;No ID Provided&lt;/p&gt;
    }

    return (...something);
  `;

    id = 1;
    if(!id){
        return <p>No ID Provided</p>;
    }

    const [mode, setMode] = useState("bad");

    return(

        <div className="flex flex-col items-center">

            <h1>Conditional Rendering</h1>

            <p>
                React hooks must always be called unconditionally and in the same order during every render. In your code, the useState and useEffect hooks are called conditionally based on the if (!id) check. This violates the Rules of Hooks.

                <br/><strong>Why This Happens</strong><br/>
                React requires that hooks are called in the same order on every render. When you conditionally return "No ID Provided" before calling the hooks, the hooks are skipped entirely for that render. This breaks the rules and causes React to throw the warning.

                <br/><strong>How to Fix It</strong><br/>
                To fix this, ensure that hooks are always called, even if the id is not provided. You can move the conditional rendering logic after the hooks are called.
                
            </p>

            <div className="flex gap-2 py-4">
                <button
                    onClick={() => {setMode("bad")}}
                    className = "darthButtonRed" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {setMode("good")}}
                    className = "darthButtonGreen"
                >
                    Show Good Example
                </button>
            </div>

            <pre>
                {mode === "Good" ? goodCode : badCode}
            </pre>
                
        </div>

    );

};

export default Mistake2;