import React from "react";

const NinethQT2 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">9</div>
            <div className="test-q">
                Nu am cu 7 kilograme peste sau sub greutatea ideala pentru corpul meu.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q9" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q9" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default NinethQT2