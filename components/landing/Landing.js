

import React from 'react'

import { Component } from 'react'


import iphone from '../../../src/images/iphone.jpg'

import pixel from '../../../src/images/pixel.jpg'

import windows from '../../../src/images/windows.jpg'


import '../../App.css';





class Landing extends Component {




  componentDidMount() {



  }




  render() {





    return (

      <div >

        <section className="row">

          <h2 className="col s12 offset-s2">        We offer cell phones of your choice          </h2>

          <h5 className="col s12 offset-s2">    Have a look at what we have to offer and you will find what you are looking for     </h5>



        </section>

        <section className="row  img1">

          <div className="col s2 headings offset-s3 ">   Welcome     </div>

          <div className="col s2 headings offset-s4 ">   Find what You like <br /> from our store    </div>


        </section>


        <section className="row">


          <div className="row">
            <div className="col s2 offset-s4 ">    <a className="btn-floating btn-large green pulse"><i className="material-icons">android</i> </a>  Android Phones   </div>


            <div className="col s2 offset-s2 ">    <a className="btn-floating btn-large cyan pulse"><i className="material-icons">battery_std</i></a>   Different Batteries     </div>


          </div>

          <div className="row">
            <div className="col s2 offset-s4 ">    <a className="btn-floating btn-large green pulse"><i className="material-icons">camera_rear</i> </a>  Accessories  </div>


            <div className="col s2 offset-s2 ">    <a className="btn-floating btn-large cyan pulse"><i className="material-icons">computer</i></a>   Updates    </div>


          </div>





        </section>



        <div className="row section3">


          <div className="col s4 m2 l2 offset-l1">

            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={iphone} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Iphones <i className="material-icons right">more_vert</i></span>
                <p><a >This is a link</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Apple Product <i className="material-icons right">close</i></span>
                <p> Vast variety of apple products available</p>
              </div>
            </div>

          </div>

          <div className="col s4 m2 l2 offset-l1">

            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={pixel} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Android <i className="material-icons right">more_vert</i></span>
                <p><a >This is a link</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"> Android OS <i className="material-icons right">close</i></span>
                <p> Vast variety of apple products available</p>
              </div>
            </div>

          </div>

          <div className="col s4 m2 l2 offset-l1">

            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={windows} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Windows  <i className="material-icons right">more_vert</i></span>
                <p><a >This is a link</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"> Windows OS <i className="material-icons right">close</i></span>
                <p> Microsofts Exclusives also available</p>
              </div>
            </div>

          </div>




        </div>

        <footer className="page-footer grey darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">React Js</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright saadsheikh27@gmail.com
            <a className="grey-text text-lighten-4 right" >More Links</a>
            </div>
          </div>
        </footer>








      </div>



    )




  }







}


export default Landing;