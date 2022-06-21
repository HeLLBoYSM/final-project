import React from "react";

const TenthQT2 = () => {
    return <>
        <div className="question">
            <div className="test-qnr">10</div>
            <div className="test-q">Nu consum mai mult de 2 - 3 bauturi cu cofeina pe zi.</div>

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

export default TenthQT2