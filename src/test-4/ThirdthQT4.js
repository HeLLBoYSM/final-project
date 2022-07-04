import React from "react";

const ThirdthQT4 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">3</div>
            <div className="test-q">Atunci cand cineva ma intrerupe imi este greu sa-i spun sa ma lase sa revin la ceea ce lucram.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q3" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Total adevarat</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q3" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">Undeva pe la mijloc</div>


            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q3" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type="radio"></input>

                </div>

                <div className="test-atxt">Total fals</div>


            </div>

        </div>

    </>
}

export default ThirdthQT4