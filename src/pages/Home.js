import React from 'react';
import './global.css'

import { Link } from 'react-router-dom';


function Home() {
    return (
      <div 
        className="Base"
        style = {{
            flexDirection:'column'
        }}        
      >
        <div 
          className="Pretendard_text"
          style = {{
            color:'#FFFFFF',
            fontSize:50,
            margin:30
          }}
        >
          React Playground !
        </div>
        <div
            style = {{
                marginTop:30
            }}
        >


{/*Links*/}
            <div
                className='Pretendard_text'
                style = {{
                    color:'#FFFFFF',
                    margin:30,
                    flexDirection:'column',
                    fontSize:30
                }}
            >

                <Link to="/ScrollAnimation" style={{ color: '#FFFFFF' }}>
                  <div>
                    1. Scroll
                  </div>
                </Link>

                <Link to="Animation1" style={{ color: '#FFFFFF'}}>
                  <div>
                    2. Animation1
                  </div>
                </Link>
              
            </div>
        </div>
      </div>
    );
  }

export default Home;