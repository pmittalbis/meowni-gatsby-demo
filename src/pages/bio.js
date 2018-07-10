import React from 'react'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

import Link from 'gatsby-link';
import profilePic from '../img/profile-pic.jpeg';
import twitter from '../img/twitter.svg';
import github from '../img/github.svg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          maxWidth: '16.6%',
          textAlign: 'center'
        }}
      >
      <a href="/" title="Photo of my face" aria-label="Photo of my face">
        <img
          src={profilePic}
          className="avtar"
          alt={`Photo of my face`}
          style={{
            borderRadius: "50%", 
            width: "150px",
            height: "150px",
            marginBottom: '0px',
          }}
        />
       </a>
       <div className='social-media' style={{ textAlign: 'center' }}>
         <a href="https://github.com/notwaldorf" title="Peep at my GitHub">
         <img
            src={github}
            className="social-img"
          />
         </a>
         <a href="https://github.com/notwaldorf" title="Follow me on twitter">
          <img
            src={twitter}
            className="social-img"
          />
         </a>
         <a href="https://github.com/notwaldorf" title="Follow me on dribbble">🏀
         </a>
         <a href="https://github.com/notwaldorf" title="Follow my photos on exposure.co">📷
         </a>
         <a href="https://github.com/notwaldorf" title="Atom RSS feed">📝
         </a>
       </div>
       <div style={{ padding: '10px' }}>
         <Link to="/about"><p style={{ fontWeight: 'bold', color: "black" }}>about</p></Link>
         <Link to="/"><p style={{ fontWeight: 'bold', color: "black" }}>posts</p></Link>
         <Link to="/projects"><p style={{ fontWeight: 'bold', color: "black" }}>codes</p></Link>
         <Link to="talks"><p style={{ fontWeight: 'bold', color: "black" }}>talks</p></Link>
         <p id='rainButton' title="emoji-rain" style={{ fontSize: '20px' }}>✨</p>
       </div>
     </div>
   )
 }
}

export default Bio