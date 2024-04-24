import React from "react";
import "../css/VenueSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function VenueSection() {
    return (
        <>
            <div className="venue-section">
                <div className="venue-container">
                    <div className="venue-container-row">
                        <div className="venue-container-col">
                            <div className="venue-text-wrapper">
                                <p className="venue-subheading">April 14-20</p>
                                <p className="venue-heading">Centro Cultural de Belém</p>
                            </div>
                        </div>
                        <div className="venue-container-col-special">
                        <Link to="https://www.ccb.pt/">
                                    <Button className="button-about" buttonStyle="btn-primary" buttonSize='btn--wide' buttonColor='primary'><strong>About the Venue</strong></Button>
                        </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default VenueSection;