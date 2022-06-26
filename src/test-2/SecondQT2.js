import React from "react";

const SecondQT2 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">2</div>
            <div className="test-q">Dorm cel putin 7 - 8 ore pe noapte.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q2" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q2" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default SecondQT2