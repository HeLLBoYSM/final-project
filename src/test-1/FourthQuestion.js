import React from "react";

const FourthQuestion = () => {
    return <>
        <div className="question">
            <div className="test-qnr">4</div>
            <div className="test-q">Cum stai atunci cand te relaxezi?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">
                    Cu genunchii indoiti la 90 de grade si picioarele alaturate, in mod ordonat.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Cu picioarele drepte sau intinse.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={3} type='radio'></input>

                </div>

                <div className="test-atxt">


                    Cu un picior indoit sub sezut.

                </div>

            </div>

        </div>
    </>
}

export default FourthQuestion