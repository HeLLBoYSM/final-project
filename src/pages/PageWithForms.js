import React from "react";
import '../pages/PWF.css'

const PageWithForms = () => {
    return <>

        <h2> Teste Psihologice</h2>

        <div className="content">
            <p className="first-paragraph">Cat de bine te cunosti pe tine insuti? Testele de personalitate te ajuta sa te explorezi obiectiv si sa descoperi adevarul despre tine.</p>
            <div className="list-box">
                <h3>Teste de personalitate</h3>
                <ul>
                    <li>
                        <a href="#">Afla ce cred ceilalti despre tine!</a>
                    </li>
                    <li>
                        <a href="#">Cat de vulnerabil esti la stres?</a>
                    </li>
                    <li>
                        <a href="#">Cum te simti in pielea ta ?</a>
                    </li>
                    <li>
                        <a href="#">Testarea emotiilor</a>
                    </li>
                    <li>
                        <a href="#">Inteligenta emotionala</a>
                    </li>
                </ul>
            </div>
            <div className="list-box">
                <h3>Teste de aptitudini</h3>
                <ul>
                    <li>
                        <a href="#">Dominatia creierului tau</a>
                    </li>
                    <li>
                        <a href="#">Testeaza-ti capacitatea de concentrare</a>
                    </li>
                    <li>
                        <a href="#">Test de analogie</a>
                    </li>
                    <li>
                        <a href="#">Test de asociere si clasificare</a>
                    </li>
                    
                </ul>

            </div>
        </div>
    </>
}
export default PageWithForms