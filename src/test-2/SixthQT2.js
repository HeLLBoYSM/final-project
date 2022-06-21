import React from "react";

const SixthQT2 = () => {
    return <>
        <div className="question">
            <div className="test-qnr">6</div>
            <div className="test-q">Consum alcool foarte rar - nu mai mult de trei pahare pe saptamana.</div>

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

export default SixthQT2