import React from "react";

const SixthQuestion = () => {
    return <>

        <div className="question">
            <div className="test-qnr">6</div>
            <div className="test-q">Cum iti faci intrarea la o petrecere sau o intalnire sociala?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">Intri zgomotos, sa te observe toata lumea.
                </div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Intri pe tacute si te uiti dupa cineva cunoscut.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={3} type='radio'></input>

                </div>

                <div className="test-atxt">

                    Intri cat poti de linistit si tacut, apoi incerci sa ramai neobservat.

                </div>

            </div>

        </div>
    </>

}
export default SixthQuestion