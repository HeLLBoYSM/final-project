import React from "react";

const FourthQuestion = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">4</div>
            <div className="test-q">Cum stai atunci cand te relaxezi?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q4" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">
                    Cu genunchii indoiti la 90 de grade si picioarele alaturate, in mod ordonat.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q4" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Cu picioarele drepte sau intinse.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q4" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type='radio'></input>

                </div>

                <div className="test-atxt">


                    Cu un picior indoit sub sezut.

                </div>

            </div>

        </div>
    </>
}

export default FourthQuestion