import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// 오른쪽에서 나오는 애니메이션
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const DescriptionContainer = styled.div`
  animation: ${slideIn} 0.5s forwards;
  width: 80%; // 설명이 나올 박스의 폭
  height: 500px;
  padding: 10px;
  background-color: #222;
  color: white;
  position: absolute; // 부모 컨테이너가 relative여야 ...
  right: 0;
  top: 0;
`;

function Animation1() {
    const [isActive, setIsActive] = useState(false);
    
    return(
        <div
            className='Base'
            style={{
                flexDirection:'column'
            }}
        >
{/*Title and Page Description*/}
            <div
                className='Pretendard_text'
                style={{
                    color:'#FFFFFF',
                    fontSize:50,
                    margin:20
                }}
            >
                Animation 1 !
            </div>
            <div
                className='Pretendard_text'
                style={{
                    color:'#FFFFFF',
                    fontSize:20,
                    margin:20
                }}
            >
                각 항목을 선택하면 옆에서 설명 컴포넌트가 스스륵하고 나오는 그런 ...
            </div>
{/* Test Field */}
            <div
                style={{
                    margin:20,
                    backgroundColor:'#333333',
                    position:'relative'
                }}
            >
                {/*항목들*/}
                <div
                    onClick={() => setIsActive(!isActive)}
                    style={{
                        color:'#FFFFFF',
                        fontSize:30,
                        margin:10,
                        backgroundColor:'#666666'
                    }}
                >
                    - 항목 1
                </div>
                {isActive && <DescriptionContainer>까꿍!</DescriptionContainer>}
            </div>

        </div>
    );

}

export default Animation1;
