import React from "react";

const FirstQT4 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">1</div>
            <div className="test-q">Ceilalti ma intrerup tot timpul.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Total adevarat</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">Undeva pe la mijloc</div>


            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type="radio"></input>

                </div>

                <div className="test-atxt">Total fals</div>


            </div>

        </div>

    </>
}

export default FirstQT4