import React from "react";

const EigthQuestion = () => {
    return <>
        <div className="question">
            <div className="test-qnr">8</div>
            <div className="test-q">Care este culoarea ta preferata dintre cele de mai jos?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">Rosu sau portocaliu.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Galben sau bleu.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={3} type='radio'></input>

                </div>

                <div className="test-atxt">

                    Maro sau gri.

                </div>

            </div>

        </div>
    </>

}
export default EigthQuestion