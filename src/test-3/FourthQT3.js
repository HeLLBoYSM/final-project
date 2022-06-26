import React from "react";

const FourthQT3 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">4</div>
            <div className="test-q">Imi place sa citesc instructiunile cand cumpar ceva nou.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q4" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q4" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default FourthQT3