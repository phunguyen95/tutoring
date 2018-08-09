import React, { Component } from 'react'

export default class CounterRegister extends Component {
  render() {
    return (
    
	<div class="counter">
    <div class="counter_background"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="counter_content">
                    <h2 class="counter_title">Register Now</h2>
                    <div class="counter_text"><p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dumy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
                </div>

            </div>
        </div>

        <div class="counter_form">
            <div class="row fill_height">
                <div class="col fill_height">
                    <form class="counter_form_content d-flex flex-column align-items-center justify-content-center" action="#">
                        <div class="counter_form_title">courses now</div>
                        <input type="text" class="counter_input" placeholder="Your Name:" required="required"/>
                        <input type="tel" class="counter_input" placeholder="Phone:" required="required"/>
                        <select name="counter_select" id="counter_select" class="counter_input counter_options">
                            <option>Choose Subject</option>
                            <option>Subject</option>
                            <option>Subject</option>
                            <option>Subject</option>
                        </select>
                        <textarea class="counter_input counter_text_input" placeholder="Message:" required="required"></textarea>
                        <button type="submit" class="counter_form_button">submit now</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
</div>

    )
  }
}
