import React, { Component } from 'react'
import background from '../../images/newsletter.jpg';
export default class NewLetters extends Component {
  render() {
    return (
     
	<div className="newsletter">
    <div className="newsletter_background parallax-window" style={{backgroundImage:"url("+background+")"}}></div>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="newsletter_container d-flex flex-lg-row flex-column align-items-center justify-content-start">

                    <div className="newsletter_content text-lg-left text-center">
                        <div className="newsletter_title">sign up for news and offers</div>
                        <div className="newsletter_subtitle">Subcribe to lastest smartphones news & great deals we offer</div>
                    </div>

                    <div className="newsletter_form_container ml-lg-auto">
                        <form action="#" id="newsletter_form" className="newsletter_form d-flex flex-row align-items-center justify-content-center">
                            <input type="email" className="newsletter_input" placeholder="Your Email" required="required"/>
                            <button type="submit" className="newsletter_button">subscribe</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}
