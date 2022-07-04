import React from "react";

const TenthQT3 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">10</div>
            <div className="test-q">Mai degraba sunt atent la CE se spune decat la CUM se pune.</div>

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

export default TenthQT3