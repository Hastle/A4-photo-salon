import React from "react";
import Logotype from "../Logotype/Logotype";
import "./styles.sass";
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <Logotype />
                <div className="footer-info">
                    <div className="contacts">
                        <p>Ленинградский проспект, 54А (1 этаж)</p>
                        <p>Тел: 8(995)538-08-40</p>
                    </div>
                    <div className="copyright">
                        <p>© 2016-2023 "Фотосалон А4" - фотоуслуги в г. Ярославль</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;