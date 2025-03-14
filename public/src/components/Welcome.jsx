import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Robot from '../asstes/robot.gif'

export default function Welcome({currentUser}) {
  return (
    <Container>
        <img src={Robot} alt='RobotImage'/>
        <h1>
            Welcome, <span>{currentUser ? currentUser.username : ""}</span>
        </h1>
        <h3>Please select a chat to Start Messaging.</h3>  
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  img {
    height: 20rem;
    width: auto;
  }

  span {
    color: #4e00ff;
  }

  @media screen and (max-width: 720px) {
    img {
      height: 15rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;
