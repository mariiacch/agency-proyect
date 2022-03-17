import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman.png'
import { AnimatedShapes } from './AnimatedShapes'

const Container= styled.div`
    height:calc(100vh - 50px);
    display:flex;
    padding:20px;
    @media only screen and (max-width:480px){
    flex-direction:column;
}
   
`
const Left= styled.div`
    width:60%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
   // border:1px solid;
   @media only screen and (max-width:480px){
    width:100%;
    height:100%;
}
   
`
const Title= styled.h1`
    font-size:60px;
    width:60%;
    @media only screen and (max-width:480px){
    width:100%;
    font-size:50px;
}
`
const Desc= styled.p`
    width:60%;
    font-size:20px;
    margin-top:20px;
    @media only screen and (max-width:480px){
    width:100%;
}
`
const Info = styled.div`
    width:60%;
    display:flex;
    //border:1px solid;
    justify-content:space-between;
    align-items:center;
    margin-top:50px;
    @media only screen and (max-width:480px){
    width:100%;
    flex-direction:column;
}

`
const Button = styled.button`
padding:15px;
background-color:darkblue;
color:white;
border-radius:10px;
font-weight:bold;
border:none;
letter-spacing:2px;
cursor:pointer;

@media only screen and (max-width:480px){
    margin-bottom:20px;
}
`
const Contact = styled.div`
    display:flex;
    flex-direction:column;
`
const Phone = styled.span`
    color:#f0667d;
    font-weight:bold;
`
const ContactText = styled.span`
    color: gray;
    margin-top:5px;
`
const Right= styled.div`
    margin-top:130px;
    width:50%;
    //border:1px solid;
    @media only screen and (max-width:480px){
    display:none;
} 
   
`
const Image = styled.img`
    width:100%;
    
`
const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventures in creative age</Title>
                <Desc>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</Desc>
                <Info>
                    <Button>START A PROYECT</Button>
                    <Contact>
                        <Phone>
                            Call us (012) 345 -6789
                        </Phone>
                        <ContactText>
                            For any question or concern
                        </ContactText>
                    </Contact>
                </Info>
        </Left>
        <Right>
            <Image src={Woman}/>

           
        </Right>
       <AnimatedShapes/>
    </Container>
  )
}

export {Intro}