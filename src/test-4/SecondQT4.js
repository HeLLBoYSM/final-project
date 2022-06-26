import React from "react";

const SecondQT4 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">2</div>
            <div className="test-q">Atunci cand sunt intrerupt imi este greu sa revin la ceea ce faceam.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q2" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Total adevarat</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q2" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">Undeva pe la mijloc</div>


            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">Total fals</div>


            </div>

        </div>

    </>
}

export default SecondQT4