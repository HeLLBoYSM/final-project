import React from "react";

const EithQT2 = () => {
    return <>
        <div className="question">
            <div className="test-qnr">8</div>
            <div className="test-q">Consum cel putin o masa echilibrata pe zi.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default EithQT2