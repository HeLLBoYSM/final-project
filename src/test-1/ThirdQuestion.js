import React from "react";

const ThirdQuestion = () => {
    return <>
        <div className="question">
            <div className="test-qnr">3</div>
            <div className="test-q">Ce faci atunci cand vorbesti cu cineva?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">Stai cu bratele incrucisate.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">


                    Ai una sau ambele maini in sold.


                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={3} type='radio'></input>

                </div>

                <div className="test-atxt">

                Te joci cu urechea, barbia, sau iti netezesti parul.

                </div>

            </div>

        </div>

    </>
}
export default ThirdQuestion