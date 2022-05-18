import React from 'react'

export default function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <p>please do not hesitate to send us a message</p>
            <form>
                <input type="text" className="form-control" placeholder="NAME" name="name" value="" />
                <input type="email" className="form-control" placeholder="EMAIL" name="email" value="" />
                <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
                <button className="btn send-button" type="submit" value="SEND">
                    <div className="btn-icon">
                        <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                    </div>
                </button>
            </form>
        </div>
    )
}
