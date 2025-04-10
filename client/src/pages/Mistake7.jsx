import { useEffect, useState } from "react";

const Mistake7 = () => {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState("Bad");

    const badCode = `
    const [post, setPost] = useState(null);

    useEffect(() => {

        fetch('https://dummyjson.com/posts/1')
        .then((res) => res.json())
        .then((data) => {
            setPost(data);
        });

    }, []);
    `

    const goodCode = `
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://dummyjson.com/posts/1')
        .then((res) => res.json())
        .then((data) => {
            setPost(data);
            setLoading(false);

        });

    }, []);
    `

    useEffect(() => {
        fetch('https://dummyjson.com/posts/1')
        .then((res) => res.json())
        .then((data) => {
            setPost(data);
            setLoading(false);
        });
    }, []);

    return(

        <div className="flex flex-col items-center">

            <h1>Initializing state with object</h1>

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

            <div className="mb-4">{

                loading ? ("Loading..."

                ) : (

                    <>
                        <p>{post.body}</p>
                    </>

                )

            }</div>
            
            <pre>
                {mode === "Good" ? goodCode : badCode}
            </pre>

        </div>

    );

};

export default Mistake7;