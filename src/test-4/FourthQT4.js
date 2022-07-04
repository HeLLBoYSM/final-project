import React from "react";

const FourthQT4 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">4</div>
            <div className="test-q">Mi se intampla frecvent sa imi fie distrasa atentia.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q4" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Total adevarat</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q4" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">Undeva pe la mijloc</div>


            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q4" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type="radio"></input>

                </div>

                <div className="test-atxt">Total fals</div>


            </div>

        </div>

    </>
}

export default FourthQT4