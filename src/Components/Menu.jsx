import React, { Component } from 'react'
import "../Components/Menu.css"
import SubMenu from './SubMenu';
import pic1 from "../images/pic1.jpg"

export default class Menu extends Component {
    state={Posts:[
      {title:"Espresso",description:"Flavoured Hot"},
      {title:"Caramel",description:"Creamed Hot"},
      {title:"Black Coffee",description:"Bitter Hot"},
      {title:"Costa Rica",description:"Foamy Sweet"},
    ]}
  render() {
    return (
      <section id='menu'>
        <div className='innerMenu'>
        <h1>Menu</h1>
        <div className=''>
        <SubMenu img={pic1} title={this.state.Posts[0].title} description={this.state.Posts[0].description} price="$3.25" />
        <SubMenu img={pic1} title={this.state.Posts[1].title} description={this.state.Posts[1].description} price="$3.50" />
        <SubMenu img={pic1} title={this.state.Posts[2].title} description={this.state.Posts[2].description} price="$3.75" />
        <SubMenu img={pic1} title={this.state.Posts[3].title} description={this.state.Posts[3].description} price="$4.00" />
        </div>
        </div>
      </section>
    )
  }
}
