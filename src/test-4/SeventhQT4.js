import React from "react";

const SeventhQT4 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">7</div>
            <div className="test-q">Visez mult cu ochii deschisi.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q7" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Total adevarat</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q7" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">Undeva pe la mijloc</div>


            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q7" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type="radio"></input>

                </div>

                <div className="test-atxt">Total fals</div>


            </div>

        </div>

    </>
}

export default SeventhQT4