import React, { Component } from 'react'
import Navbar from '../components/Navbar';
export default class Header extends Component {
  render() {
    return (
    	<header className="header">
            <Navbar/>
        </header>
    )
  }
}
