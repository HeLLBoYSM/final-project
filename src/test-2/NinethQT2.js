import React from "react";

const NinethQT2 = () => {
    return <>
        <div className="question">
            <div className="test-qnr">9</div>
            <div className="test-q">
                Nu am cu 7 kilograme peste sau sub greutatea ideala pentru corpul meu.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default NinethQT2