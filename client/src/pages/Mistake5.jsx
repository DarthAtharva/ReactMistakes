import { useState } from "react";
const PRICE_PER_ITEM = 5;

const Mistake5 = () => {

    const [itemCount, setItemCount] = useState(0);
    const [mode, setMode] = useState("Bad");

    const totalPrice = PRICE_PER_ITEM * itemCount;

    const badCode = `
    const [itemCount, setItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleClick = (e) => {
        setItemCount(itemCount + 1);
    };

    useEffect(() => {
        setTotalPrice(itemCount * PRICE_PER_ITEM);
    },[itemCount]);
    `

    const goodCode = `
    const [itemCount, setItemCount] = useState(0);
    const totalPrice = PRICE_PER_ITEM * itemCount;

    const handleClick = (e) => {
        setItemCount(itemCount + 1);
    };
    `
    const handleClick = (e) => {
        setItemCount(itemCount + 1);
    };

    return(

        <div className="flex flex-col items-center">

            <h1>Information can be derived from states/props</h1>

            <div className="flex gap-2 py-4">

                <button
                    onClick={() => {
                        setMode("Bad");
                        setItemCount(0);
                    }}
                    className = "darthButtonRed" 
                >
                    Show Bad Example
                </button>

                <button
                    onClick={() => {
                        setMode("Good");
                        setItemCount(0);
                    }}
                    className = "darthButtonGreen"
                >
                    Show Good Example
                </button>

            </div>

            <button
                className="darthButtonClick"
                onClick={handleClick}
            >Add Item</button>

            <p className="flex justify-center mt-2">PRICE_PER_ITEM : 5</p>
            <p className="flex justify-center">Item Count : {itemCount}</p>
            <p className="flex justify-center">Total Price : {totalPrice}</p>

            <pre>
                {mode === "Good" ? goodCode : badCode}
            </pre>

        </div>

    );

};

export default Mistake5;