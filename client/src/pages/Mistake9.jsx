import { use, useEffect, useState } from "react";

const PostBody = ({id, mode}) => {

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if(mode === "Good"){

            const controller = new AbortController();

            fetch(`https://dummyjson.com/posts/${id}`, {
                signal: controller.signal
            })
                .then((res) => res.json())
                .then((data) => {
                    setText(data.body);
                    setLoading(false);
                });

            return () => {controller.abort()}

        }else{

            fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setText(data.body);
                setLoading(false);
            });

        }

    }, [id]);

    return (
        
        <p className="mb-4">{

            loading ? ("Loading..."

            ) : (

                <p>{text}</p>

            )

        }</p>
    )

}

const Mistake9 = () => {

    const [id, setId] = useState(1);
    const [mode, setMode] = useState("Bad");

    const badCode = `
    const [text, setText] = useState("");

    useEffect(() => {

        fetch(\`https://dummyjson.com/posts/\${id}\`)
            .then((res) => res.json())
            .then((data) => setText(data.body));

    }, [id]);
    `

    const goodCode = `
    const [text, setText] = useState("");

    useEffect(() => {

        const controller = new AbortController();

        fetch(\`https://dummyjson.com/posts/\${id}\`, {
            signal: controller.signal
        })
            .then((res) => res.json())
            .then((data) => setText(data.body));

        return () => {controller.abort()}

    }, [id]);
    `
    return(

        <div className="flex flex-col items-center">

            <h1>Fetching in useEffect</h1>

            <div className="flex gap-2 justify-center py-4">

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
                className="darthButtonClick mb-2"
                onClick={() => setId(Math.floor(Math.random() * 100))}
            >Show another DummyJSON</button>

            <PostBody id = {id} mode = {mode}/>


            <pre>
                {mode === "Good" ? goodCode : badCode}
            </pre>

        </div>

    );

};

export default Mistake9;