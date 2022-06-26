import React from "react";

const EigthQuestion = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">8</div>
            <div className="test-q">Care este culoarea ta preferata dintre cele de mai jos?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q8" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Rosu sau portocaliu.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q8" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Galben sau bleu.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q8" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type='radio'></input>

                </div>

                <div className="test-atxt">

                    Maro sau gri.

                </div>

            </div>

        </div>
    </>

}
export default EigthQuestion