import React from "react";

const ThirdQT2 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">3</div>
            <div className="test-q">Ma simt in largul meu sa discut lucruri intime cu persoanele in care am incredere.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q3" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q3" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default ThirdQT2