import React, { Component } from 'react'

export default class IntroductionWebsitePage extends Component {
  render() {
    return (
	<div className="features">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="section_title_container text-center">
                    <h2 className="section_title">Welcome To Unicat E-Learning</h2>
                    <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
                </div>
            </div>
        </div>
        <div className="row features_row">
            
            <div className="col-lg-3 feature_col">
                <div className="feature text-center trans_400">
                    <div className="feature_icon">
                    <img src={require('../../images/icon_1.png')} alt=""/> 
                    </div>
                    <h3 className="feature_title">The Experts</h3>
                    <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                </div>
            </div>

            <div className="col-lg-3 feature_col">
                <div className="feature text-center trans_400">
                    <div className="feature_icon">
                    <img src={require('../../images/icon_2.png')} alt=""/> 
                    </div>
                    <h3 className="feature_title">Book & Library</h3>
                    <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                </div>
            </div>

            <div className="col-lg-3 feature_col">
                <div className="feature text-center trans_400">
                    <div className="feature_icon">
                    <img src={require('../../images/icon_1.png')} alt=""/> 
                    </div>
                    <h3 className="feature_title">Best Courses</h3>
                    <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                </div>
            </div>

            <div className="col-lg-3 feature_col">
                <div className="feature text-center trans_400">
                    <div className="feature_icon">
                    <img src={require('../../images/icon_4.png')} alt=""/> 
                    </div>
                    <h3 className="feature_title">Award & Reward</h3>
                    <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                </div>
            </div>

        </div>
    </div>
</div>

    )
  }
}
