import { useEffect, useState } from "react";

const PostBody = ({id, mode}) => {

    const [text, setText] = useState("");

    useEffect(() => {

        if(mode === "Good"){

            const controller = new AbortController();

            fetch(`https://dummyjson.com/posts/${id}`, {
                signal: controller.signal
            })
                .then((res) => res.json())
                .then((data) => setText(data.body));

            return () => {controller.abort()}

        }else{

            fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setText(data.body));

        }

    }, [id]);

    return <p>{text}</p>;

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

            <button 
                className="darthButton bg-gray-100 mb-2"
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