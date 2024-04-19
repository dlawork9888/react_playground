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
            fontSize:50
          }}
        >
          React Playground !
        </div>
        <div
            style = {{
                marginTop:30
            }}
        >
            <div
                className='Pretendard_text'
                style = {{
                    color:'#FFFFFF',
                    fontSize:30
                }}
            >
                <Link to="/scroll" style={{ color: '#FFFFFF' }}>1. Scroll !</Link>
            </div>
          
        </div>
      </div>
    );
  }

export default Home;