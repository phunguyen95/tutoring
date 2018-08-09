import React, { Component } from 'react'
import HomeSliderItem from '../components/HomeSlider/HomeSliderItem';
import IntroductionWebsitePage from '../components/Introduction/IntroductionWebsitePage';
import PopularCourseIntro from '../components/PopularCourse/PopularCourseIntro';
import CounterRegister from '../components/CounterRegister/CounterRegister';
import TeamTutors from '../components/Team/TeamTutors'
import NewLetters from '../components/NewsLetter/NewLetters';
export default class BodyContent extends Component {
  render() {
    return (
      <div className="">
      <HomeSliderItem/>
      <IntroductionWebsitePage/>
      <PopularCourseIntro/>
      <CounterRegister/>
      <TeamTutors/>
      <NewLetters/>
      </div>
    )
  }
}
