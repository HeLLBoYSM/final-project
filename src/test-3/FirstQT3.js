import React from "react";

const FirstQT3 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">1</div>
            <div className="test-q">In general intarzii la intalnirile mele.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">NU</div>


            </div>

        </div>

    </>
}

export default FirstQT3