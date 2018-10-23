import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Web Development Projects</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h3> The Roméo Dallaire Child Soldiers Initiative </h3>

          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          <li>Lead a team of four developers from various levels of experiences to develop an APdfadfasdfasdfasfasfasdfasfasdfadfsafsI </li>
          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          <h3> subreddit word search </h3>

          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          <li>Lead a team of four developers from various levels of experiences to develop an APdfadfasdfasdfasfasfasdfasfasdfadfsafsI </li>
          <li>Lead a team of four developers from various levels of experiences to develop an API </li>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work Experience</h2>
          <span className="image main"><img src={pic02} alt="" /></span>

          <h3>Master Merchant Systems&emsp;&emsp;&emsp;&emsp; Sep – Dec 2017</h3>
          <li></li>
          <li></li>
          <li></li>

          <h3>Dalhousie University&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; Jan – Apr 2016</h3>
          <li></li>
          <li></li>
          <li></li>

          <h3>InNetwork Inc.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; May - Aug 2016</h3>
          <li></li>
          <li></li>
          <li></li>
          {close}
        </article>

        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
         
        <div class="row">
          <div class="column"> 
            <h3> Languages </h3>
          
              <p>Python<br />
               Java<br />
               C++ <br />
               JavaScript<br />
               HTML<br />
               SQL
               </p>
          </div>
          <div class="column">
            <h3> Tools </h3>
              
              <p>PyCharm<br />
              Eclipse<br />
              Github       <br />       
              GitLab<br />
              Bash<br />
              Bitbucket</p>
          </div>
        </div>
        
          {close}
        </article>


        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main