import React from "react";
import '../pages/PWF.css'
import { Link } from "react-router-dom";

const PageWithForms = () => {
    return <>
         <div className="the-box">  
        <h2> Teste Psihologice</h2>

        <div className="content">
            <p className="first-paragraph">Cat de bine te cunosti pe tine insuti? 
                Testele de personalitate te ajuta sa te explorezi obiectiv si 
                sa descoperi adevarul despre tine.</p>
            <div className="list-box">
                <h3>Teste de personalitate</h3>
                <ul>
                    <li>
                        <Link to='/first-test'>Afla ce cred ceilalti despre tine!</Link>
                    </li>
                    <li>
                        <Link to='/second-test'>Cat de vulnerabil esti la stres?</Link>
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
                        <Link to='/third-test'>Dominatia creierului tau</Link>
                    </li>
                    <li>
                        <Link to='/fourth-test'>Testeaza-ti capacitatea de concentrare</Link>
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
        </div> 
    </>
}
export default PageWithForms