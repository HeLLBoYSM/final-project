import React from "react";

const NinethQT4 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">8</div>
            <div className="test-q">Ma simt adesea imprastiat si ineficient.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q9" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Total adevarat</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q9" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

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

export default NinethQT4