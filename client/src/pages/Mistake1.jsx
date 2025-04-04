import { useState } from "react";

const Mistake1 = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {

        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

        // setCount((prev => (prev + 1)));
        // setCount((prev => (prev + 1)));
        // setCount((prev => (prev + 1)));
        // setCount((prev => (prev + 1)));

    };

    return(

        <>
            <h1>State updates aren't immediate</h1>

            <div className="flex flex-col items-center">

                <button onClick={handleClick} className="darthButton">Click</button>
                <p>Count is: {count}</p>

            </div>

        </>

    );

};

export default Mistake1;