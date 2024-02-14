import React from 'react'
import './Details.css'

const Details = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Enter project details</div>
                <div className="underline"></div>
            </div>
            <form name="Project Details Database">
                <div className="inputs">
                    <div className="input-field">
                        <p>Project title :</p>
                        <div className="input">
                            <input type="text" name="Project Title" placeholder="Project Title" />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Team Leader Details :</p>
                        <div className="input">
                            <input type="text" name="Leader Name" placeholder="Team Leader Name" />
                            <input type="text" name="Leader Contact" placeholder="Phone No." />
                            <input type="email" name="Leader Email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Member 1 Details :</p>
                        <div className="input">
                            <input type="text" name="Member 1 Name" placeholder="Member 1 Name" />
                            <input type="text" name="Member 1 Contact" placeholder="Phone No." />
                            <input type="email" name="Member 1 Email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Member 2 Details :</p>
                        <div className="input">
                            <input type="text" name="Member 2 Name" placeholder="Member 2 Name" />
                            <input type="text" name="Member 2 Contact" placeholder="Phone No." />
                            <input type="email" name="Member 2 Email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Member 3 Details (optional) :</p>
                        <div className="input">
                            <input type="text" name="Member 3 Name" placeholder="Member 3 Name" />
                            <input type="text" name="Member 3 Contact" placeholder="Phone No." />
                            <input type="email" name="Member 3 Email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Mentor Details :</p>
                        <div className="input">
                            <input type="text" name="Mentor Name" placeholder="Mentor Name" />
                            <input type="text" name="Mentor Contact" placeholder="Phone No." />
                            <input type="email" name="Mentor Email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Abstract of the Project :</p>
                        <div className="input">
                            <input type="text" name="Abstract" placeholder="Abstract" />
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit">Sumbit Details</div>
                </div>
            </form>
        </div>
    )
}

export default Details
