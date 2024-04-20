import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll'; // react-router-dom의 Link와 겹칠 수도 있으니까 alias를 설정하자
import './global.css';

function ScrollAnimation() {
    return (
      <div className="Base" style={{ flexDirection:'column' }}>
        <div className="Pretendard_text" style={{ color:'#FFFFFF', fontSize:30, margin:30 }}>
          Scroll Animation Practice !
        </div>
        
        <div style={{ flexDirection:'column', margin:30 }}>
{/*ScrollTo List => ScrollLink 컴포넌트*/}
          <ScrollLink to="section1" smooth={true} duration={500}>
            <div className='Pretendard_text' style={styles}>
              Scroll to 0
            </div>
          </ScrollLink>
          <ScrollLink to="section2" smooth={true} duration={500}>
            <div className='Pretendard_text' style={styles}>
              Scroll to 1
            </div>
          </ScrollLink>
          <ScrollLink to="section3" smooth={true} duration={500}>
            <div className='Pretendard_text' style={styles}>
              Scroll to 2
            </div>
          </ScrollLink>
          <ScrollLink to="section4" smooth={true} duration={500}>
            <div className='Pretendard_text' style={styles}>
              Scroll to 3
            </div>
          </ScrollLink>
        </div>

{/* Scroll Sections => Element 컴포넌트*/}
        <Element name="section1" className='VCR_text' style={sectionStyle}>
          0
        </Element>
        <Element name="section2" className='VCR_text' style={sectionStyle}>
          1
        </Element>
        <Element name="section3" className='VCR_text' style={sectionStyle}>
          2
        </Element>
        <Element name="section4" className='VCR_text' style={sectionStyle}>
          3
        </Element>
      </div>
    );
}

// Styling objects for reuse
const styles = {
  color:'#FFFFFF',
  fontSize:30,
  paddingLeft:20,
  marginTop:10,
  backgroundColor:'#AAAAAA'
};

const sectionStyle = {
  display:'flex',
  height:1000,
  backgroundColor:'#555555',
  alignItems:'center',
  justifyContent:'center',
  color:'#000000',
  fontSize:100,
  marginTop:30
};

export default ScrollAnimation;
