import React from "react";

const SixthQuestion = (props) => {
    return <>

        <div className="question">
            <div className="test-qnr">6</div>
            <div className="test-q">Cum iti faci intrarea la o petrecere sau o intalnire sociala?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q6" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Intri zgomotos, sa te observe toata lumea.
                </div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q6" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Intri pe tacute si te uiti dupa cineva cunoscut.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q6" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type='radio'></input>

                </div>

                <div className="test-atxt">

                    Intri cat poti de linistit si tacut, apoi incerci sa ramai neobservat.

                </div>

            </div>

        </div>
    </>

}
export default SixthQuestion