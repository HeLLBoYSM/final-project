import React from "react";

const FifthQT2 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">5</div>
            <div className="test-q">Cred puternic intr-o forta superioara si aceasta credinta imi aduce consolare.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q5" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q5" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default FifthQT2