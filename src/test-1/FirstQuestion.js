import React from "react";

const FirstQuestion = (props) => {


    return <>
        <div className="question">
            <div className="test-qnr">1</div>
            <div className="test-q">Cand te simti cel mai in forma?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Dimineata</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>
                </div>

                <div className="test-atxt">

                    Dupa-amiaza si spre seara.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type='radio'></input>

                </div>

                <div className="test-atxt">

                    Seara tarziu

                </div>

            </div>

        </div>

    </>
}

export default FirstQuestion