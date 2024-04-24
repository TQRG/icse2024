import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="#edab4a" fill-rule="evenodd" viewBox="0 0 2000 57"><path d="M2000 56.475H0v-50l9.502 3.421a45.758 45.758 0 0030.996 0L50 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L100 6.475l9.502 3.421a45.758 45.758 0 0030.996 0L150 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L200 6.475l9.502 3.421a45.758 45.758 0 0030.996 0L250 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L300 6.475l9.502 3.421a45.758 45.758 0 0030.996 0L350 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L400 6.475l9.502 3.421a45.758 45.758 0 0030.996 0L450 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L500 6.475l9.502 3.421a45.758 45.758 0 0030.996 0L550 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L600 6.475l9.502 3.421a45.758 45.758 0 0030.996 0L650 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L700 6.475l9.502 3.421a45.758 45.758 0 0030.996 0L750 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L800 6.475l9.502 3.421a45.758 45.758 0 0030.996 0L850 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L900 6.475l9.502 3.421a45.758 45.758 0 0030.996 0L950 6.476l8.007-3.204a45.759 45.759 0 0133.986 0L1000 6.475s4.4 1.583 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203s4.4 1.583 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203s4.4 1.583 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203s4.4 1.583 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203s4.4 1.583 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203s4.4 1.583 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203s4.4 1.583 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203s4.4 1.583 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203s4.4 1.583 9.5 3.421a45.769 45.769 0 0031 0c5.1-1.838 9.5-3.42 9.5-3.42l8.01-3.204a45.743 45.743 0 0133.98 0l8.01 3.203v50z"/></svg>

            <div className="footer-section">
                <div className="footer-container">
                    <div className="footer-logo">
                        <Link to="/" className="footer-logo-link">
                            <img src="https://tqrg.github.io/icse2024/images/logo-4.png" alt="logo" />
                            <p className="footer-title">International Conference in Software<br></br>Engineering</p>

                        </Link>
                        <br></br>
                        <p className="twitter">
                            <i className="fab fa-twitter"></i> <Link to="https://twitter.com/ICSEconf" target="_blank" className="twitter">@ICSEconf</Link>
                        </p>
                    </div>
                    <div className="footer-links">
                        
                        <br></br>
                        <p className="footer-title"><strong>GENERAL CHAIRS</strong></p>
                        <p className="footer-contact">Rui Abreu <a className="footer-link" href="mailto:rui@computer.org">rui@computer.org</a></p>
                        <p className="footer-contact">Ana Paiva <a className="footer-link" href="mailto:apaiva@fe.up.pt">apaiva@fe.up.pt</a></p>
                        <br></br>
                        <p className="footer-title"><strong>MEDIA CONTACTS</strong></p>
                        <p className="footer-contact">Rui Carvalho</p>
                        <p className="footer-mail"><a className="footer-link" href="mailto:rui.carvalho@prconsulting.pt">rui.carvalho@prconsulting.pt</a> <span className="footer-phone-number">// <strong>+351</strong> 914391836</span></p>
                        <p className="footer-contact">Rute Alegria</p>
                        <p className="footer-mail"><a className="footer-link" href="mailto:rute.alegria@prconsulting.pt">rute.alegria@prconsulting.pt</a> <span className="footer-phone-number">// <strong>+351</strong> 914407808</span></p>
                    </div>
                </div>
                <div className="footer-copywrite">
                    <p>© 2024 <strong>ICSE</strong>. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
