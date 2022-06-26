import React from "react";

const TenthQT2 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">10</div>
            <div className="test-q">Nu consum mai mult de 2 - 3 bauturi cu cofeina pe zi.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q10" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q10" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default TenthQT2