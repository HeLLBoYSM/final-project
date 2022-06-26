import React from "react";

const SeventhQT3 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">7</div>
            <div className="test-q">Imi place sa imi stabilesc obiectivele si sa imi organizez cat mai exact timpul.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q7" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q7" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default SeventhQT3