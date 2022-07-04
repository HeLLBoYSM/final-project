import React from "react";

const NinethQT3 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">9</div>
            <div className="test-q">
            Mi se intampla destul de des sa nu fiu atent cand se vorbeste cu mine.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q9" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q9" oonChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default NinethQT3