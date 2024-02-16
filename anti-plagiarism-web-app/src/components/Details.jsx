import React from 'react'
import './Details.css'

const Details = () => {
    const handleSubmitButton = () => {
        console.log("onclick fired")
        let element = document.getElementsByClassName('input')
        element.inneerHTML = ""
    }
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
                            <input type="text" name="Project Title" placeholder="Project Title" required />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Team Leader Details :</p>
                        <div className="input">
                            <input type="text" name="Leader Name" placeholder="Team Leader Name" required />
                            <input type="text" name="Leader Contact" placeholder="Phone No." required />
                            <input type="email" name="Leader Email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Member 1 Details :</p>
                        <div className="input">
                            <input type="text" name="Member 1 Name" placeholder="Member 1 Name" required />
                            <input type="text" name="Member 1 Contact" placeholder="Phone No." required />
                            <input type="email" name="Member 1 Email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Member 2 Details :</p>
                        <div className="input">
                            <input type="text" name="Member 2 Name" placeholder="Member 2 Name" required />
                            <input type="text" name="Member 2 Contact" placeholder="Phone No." required />
                            <input type="email" name="Member 2 Email" placeholder="Email" required />
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
                            <input type="text" name="Mentor Name" placeholder="Mentor Name" required />
                            <input type="text" name="Mentor Contact" placeholder="Phone No." required />
                            <input type="email" name="Mentor Email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Abstract of the Project :</p>
                        <div className="input">
                            <input type="text" name="Abstract" placeholder="Abstract" required />
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    <button className="submit" onClick={handleSubmitButton()}>Sumbit Details</button>
                </div>
            </form>
        </div>
    )
}

export default Details
