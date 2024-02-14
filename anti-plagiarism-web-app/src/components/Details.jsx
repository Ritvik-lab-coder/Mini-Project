import React from 'react'
import './Details.css'

const Details = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Enter project details</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div>
                    <p>Project title :</p>
                    <div className="input">
                        <input type="text" placeholder="Project Title" />
                    </div>
                </div>
                <div>
                    <p>Team Leader Details :</p>
                    <div className="input">
                        <input type="text" placeholder="Team Leader Name" />
                        <input type="text" placeholder="Contact" />
                    </div>
                </div>
                <div>
                    <p>Member 1 Details :</p>
                    <div className="input">
                        <input type="text" placeholder="Member 1 Name" />
                        <input type="text" placeholder="Contact" />
                    </div>
                </div>
                <div>
                    <p>Member 2 Details :</p>
                    <div className="input">
                        <input type="text" placeholder="Member 2 Name" />
                        <input type="text" placeholder="Contact" />
                    </div>
                </div>
                <div>
                    <p>Member 3 Details (optional) :</p>
                    <div className="input">
                        <input type="text" placeholder="Member 3 Name" />
                        <input type="text" placeholder="Contact" />
                    </div>
                </div>
                <div>
                    <p>Mentor Details :</p>
                    <div className="input">
                        <input type="text" placeholder="Mentor Name" />
                        <input type="text" placeholder="Contact" />
                    </div>
                </div>
                <div>
                    <p>Abstract of the Project :</p>
                    <div className="input">
                        <input type="text" placeholder="Abstract" />
                    </div>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Sumbit Details</div>
            </div>
        </div>
    )
}

export default Details
