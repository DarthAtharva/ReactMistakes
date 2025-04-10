import { useEffect, useState } from "react";

const Mistake7 = () => {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState("Bad");

    const badCode = `
    <pre>
        const [post, setPost] = useState(null);

        useEffect(() => {

            fetch('https://dummyjson.com/posts/1')
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
            });

        }, []);
    </pre>
    `

    const goodCode = `
    <pre>
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
    </pre>
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

        <div className="flex flex-col">

            <h1>Initializing state with object</h1>

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

            <div className="flex justify-center mb-4">{

                loading ? ("Loading..."

                ) : (

                    <>
                        <h1>{post.body}</h1>
                    </>

                )

            }</div>
            
            <div>{mode === "Good"? (
                <div dangerouslySetInnerHTML={{__html : goodCode}}/>
            ) : (
                <div dangerouslySetInnerHTML={{__html : badCode}}/>
            )}</div>

        </div>

    );

};

export default Mistake7;