import React from "react";

const SixthQT3 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">6</div>
            <div className="test-q">Cand sunt intrebat ceva tind sa intorc capul catre stanga.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q6" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q6" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default SixthQT3