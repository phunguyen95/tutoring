import React, { Component } from 'react'
import background from '../../images/team_background.jpg';
export default class TeamTutors extends Component {
  render() {
    return (
     
	<div className="team">
    <div className="team_background parallax-window" style={{backgroundImage:"url("+background+")"}}></div>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="section_title_container text-center">
                    <h2 className="section_title">The Best Tutors in Town</h2>
                    <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
                </div>
            </div>
        </div>
        <div className="row team_row">
            <div className="col-lg-3 col-md-6 team_col">
                <div className="team_item">
                    <div className="team_image">
                    <img src={require('../../images/team_1.jpg')} alt=""/>
                    </div>
                    <div className="team_body">
                        <div className="team_title"><a href="#">Jacke Masito</a></div>
                        <div className="team_subtitle">Marketing & Management</div>
                        <div className="social_list">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 team_col">
                <div className="team_item">
                    <div className="team_image">
                    <img src={require('../../images/team_2.jpg')} alt=""/>
                    </div>
                    <div className="team_body">
                        <div className="team_title"><a href="#">William James</a></div>
                        <div className="team_subtitle">Designer & Website</div>
                        <div className="social_list">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 team_col">
                <div className="team_item">
                    <div className="team_image">
                    <img src={require('../../images/team_3.jpg')} alt=""/>
                    </div>
                    <div className="team_body">
                        <div className="team_title"><a href="#">John Tyler</a></div>
                        <div className="team_subtitle">Quantum mechanics</div>
                        <div className="social_list">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 team_col">
                <div className="team_item">
                    <div className="team_image">
                    <img src={require('../../images/team_4.jpg')} alt=""/>
                    </div>
                    <div className="team_body">
                        <div className="team_title"><a href="#">Veronica Vahn</a></div>
                        <div className="team_subtitle">Math & Physics</div>
                        <div className="social_list">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
    )
  }
}
