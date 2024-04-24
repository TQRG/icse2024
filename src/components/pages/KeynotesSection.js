import React from "react";
import "../css/KeynotesSection.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function KeynotesSection() {
    return (
        <>
            <div className="keynotes-section" id="keynotes">
                <div className="keynotes-wrapper">
                    <p className="keynotes-heading">Keynotes</p>
                    <div className="keynotes-container">
                        <div className="keynotes-card">
                            <a href="https://conf.researchr.org/attending/icse-2024/Keynotes">
                            <div className="keynotes-card-info">
                                <h2 className="keynote-name">Rupak Majumdar</h2>
                                <img src="https://tqrg.github.io/icse2024/images/keynotes/rupak_majumdar.jpg" alt="Rupak Majumdar" />
                                <div className="keynote-title">

                                <p className="keynote-talk">Challenges and Opportunities in Model Checking Large-Scale Distributed Systems<br></br></p>
                                </div>
                                <div>
                                <p className="keynote-inst"><strong>Max Planck Institute</strong> & <strong>Amazon</strong></p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="keynotes-card">
                            <a href="https://conf.researchr.org/attending/icse-2024/Keynotes">

                            <div className="keynotes-card-info">
                                <h2 className="keynote-name">Martin Rinard</h2>
                                <img src="https://tqrg.github.io/icse2024/images/keynotes/martin_rinard.jpg" alt="Martin Rinard" />
                                <div className="keynote-title">

                                <p>Software Engineering in a World with Generative AI</p>
                                </div>
                                <div>
                                <p className="keynote-inst"><strong>Massachusetts Institute of Technology (MIT)</strong></p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="keynotes-card">
                        <a href="https://conf.researchr.org/attending/icse-2024/Keynotes">

                            <div className="keynotes-card-info">
                                <h2 className="keynote-name">Carol Smith</h2>
                                <img src="https://tqrg.github.io/icse2024/images/keynotes/carol_smith.jpg" alt="Carol Smith" />
                                <div className="keynote-title">
                                <p>Trustworthy by Design</p>
                                </div>
                                <div>

                                <p className="keynote-inst"><strong>Carnegie Mellon University (CMU)</strong></p>
                                </div>

                            </div>
                            </a>
                        </div>
                        <div className="keynotes-card">
                        <a href="https://conf.researchr.org/attending/icse-2024/Keynotes">

                            <div className="keynotes-card-info">
                                <h2 className="keynote-name">Soumith Chintala</h2>
                                <img src="https://tqrg.github.io/icse2024/images/keynotes/soumith_chintala.png" alt="Carol Smith" />
                                <div className="keynote-title">
                                <p>AI is making us rethink everything, including software development</p>
                                </div>
                                <div>

                                <p className="keynote-inst"><strong>Meta</strong> & <strong>New York University (NYU)</strong></p>
                                </div>

                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeynotesSection;