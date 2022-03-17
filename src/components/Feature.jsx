import React from 'react'
import styled from 'styled-components'
import App from '../img/App2.png'
import { AnimatedShapes } from './AnimatedShapes'
const Container = styled.div`
    display:flex;
    //height:calc(100vh - 50px);
    height:100%;
    margin-bottom:200px;
   // border:1px solid red;
   @media only screen and (max-width:480px){
    flex-direction:column;
    padding:30px 20px;
}
`
const Left = styled.div`

    width:70%;
    height:100%;
    margin:0;
    padding:0;
    //border:1px solid;
    @media only screen and (max-width:480px){
    display:none;
}
`
const Image = styled.img`
   width:70%;
    
`
const Right = styled.div`
//margin-top:120px;

display:flex;
flex-direction:column;
justify-content:center;
    width:50%;
   // border:1px solid;
    align-items:center;
    @media only screen and (max-width:480px){
    width:100%;
}
`
const Title= styled.span`
font-size:70px;
@media only screen and (max-width:480px){
    font-size:50px;
}
    
`
const SubTitle= styled.span`
font-size:24px;
font-style:italic;
color:#333;
margin-top:30px;
    
`
const Desc= styled.p`
font-size:20px;
color:#777;
margin-top:30px;
    
`
const Button= styled.button`
width:150px;
border:none;
padding:15px 20px;
background-color:darkblue;
color:white;
font-size:20px;
border-radius:20px;
margin-top:20px;
cursor:pointer;
    
`
const Feature = () => {
  return (
    <Container>
        <Left><Image src={App} /></Left>
        <Right>
            <Title><b>Good</b> Design<br/>
            <b>Good</b> business
            </Title>
            <SubTitle>
                We know that good design means good business
            </SubTitle>
            <Desc>
                We help our clients succed by creating brand identities...
            </Desc>
            <Desc>
                We care your business and guarantee you to achieve marketing goals
            </Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes/>
     </Container>
  )
}

export  {Feature}