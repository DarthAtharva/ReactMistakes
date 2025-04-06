import { useState } from "react";
const PRICE_PER_ITEM = 5;

const Mistake5 = () => {

    const [itemCount, setItemCount] = useState(0);
    const [mode, setMode] = useState("Bad");

    const totalPrice = PRICE_PER_ITEM * itemCount;

    const badCode = `
    <pre>
        const [itemCount, setItemCount] = useState(0);
        const [totalPrice, setTotalPrice] = useState(0);

        const handleClick = (e) => {
            setItemCount(itemCount + 1);
        };

        useEffect(() => {
            setTotalPrice(itemCount * PRICE_PER_ITEM);
        },[itemCount]);

    </pre>
    `

    const goodCode = `
    <pre>
        const [itemCount, setItemCount] = useState(0);
        const totalPrice = PRICE_PER_ITEM * itemCount;

        const handleClick = (e) => {
            setItemCount(itemCount + 1);
        };
    </pre>
    `
    const handleClick = (e) => {
        setItemCount(itemCount + 1);
    };

    return(

        <div className="flex flex-col">

            <h1>Information can be derived from states/props</h1>

            <div className="flex gap-2 justify-center py-4">

                <button
                    onClick={() => {
                        setMode("Bad");
                        setItemCount(0);
                    }}
                    className = "darthButton bg-red-500 text-gray-100" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                        setItemCount(0);
                    }}
                    className = "darthButton bg-green-500 text-gray-100"
                >
                    Show Good Example
                </button>

            </div>

            <div className="flex justify-center">
                <button
                    className="darthButton bg-gray-100"
                    onClick={handleClick}
                >Add Item</button>
            </div>

            <p className="flex justify-center mt-2">PRICE_PER_ITEM : 5</p>
            <p className="flex justify-center">Item Count : {itemCount}</p>
            <p className="flex justify-center">Total Price : {totalPrice}</p>

            <div>{mode === "Good"? (
                <div dangerouslySetInnerHTML={{__html : goodCode}}/>
            ) : (
                <div dangerouslySetInnerHTML={{__html : badCode}}/>
            )}</div>

        </div>

    );

};

export default Mistake5;