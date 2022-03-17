import React from 'react'
import styled from 'styled-components'
import How from '../img/how2.png'
import { MiniCard } from './MiniCard'
import Play from '../img/play.png'
import { useState } from 'react'

const Container = styled.div`
    display:flex;
   // border:1px solid red;
    height:100%;
    @media only screen and (max-width:480px){
    flex-direction:column;
    //padding:20px;
   
}
`
const Right = styled.div`
    width:60%;
   // margin-top:100px;
    //border:1px solid;
    @media only screen and (max-width:480px){
    width:100%;
}
`
const Left = styled.div`
    width:50%;
  position:relative;
    //border:1px solid;
    @media only screen and (max-width:480px){
    display:none;
}
`
const Image= styled.img`
//para ocultar la img o mostrarla
//paso props aca
//si open es true pon display none
display: ${(props) => props.open && "none"};
    height:100%;
    //width:100%;
    
    margin-left:28px;
    margin-bottom:10px;
   
    
`
const Video =styled.video`
    //si open es diferente  pon display none
display: ${(props) => !props.open && "none"};
height:300px;
position:absolute;
top:0;
bottom:0;
right:0;
margin:auto;
@media only screen and (max-width:480px){
    width:100%;

}
`
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    flex-direction:column;
    @media only screen and (max-width:480px){
    padding:20px;
    //width:100%;
}
`
const Title = styled.h1`
@media only screen and (max-width:480px){
    font-size:30px;
}
    
`
const Desc = styled.p`
font-size:20px;
margin-top:20px;
color:#555;
@media only screen and (max-width:480px){
    font-size:17px;
}

    
`
const CardContainer= styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:50px;
`
const Button= styled.button`
display:flex;
align-items:center;
    width:180px;
    border:none;
    border-radius:10px;
    background-color:darkblue;
    color:white;
    font-size:20px;
    padding:15px;
    margin-top:50px;
    cursor:pointer;
`
const Icon=styled.img`
    width:20px;
    margin-right:10px;
`


const Modal = styled.div`
    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
`
const CloseButton=styled.button`
    position:absolute;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    width:20px;
    height:20px;
    margin-top:5px;
    border:none;
    border-radius:50%;
    right:5px;
   // left:30px;
`
const Services = () => {
    //estado para abrir y cerrar video
    const [open,setOpen]= useState(false)
    const smallScreen= window.screen.width <= 480 ? true : false
  return (
   <Container> 
       <Left>
           <Image open={open} src={How}/>
           <Video 
           open={open}
           autoPlay
           loop
           controls
           src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
           />
       </Left>
       <Right>
           <Wrapper>
            <Title>Simple process to start</Title>
           <Desc>
           We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources
           </Desc>
           <CardContainer>
               <MiniCard/>
               <MiniCard/>
               <MiniCard/>
           </CardContainer>
           <Button onClick={()=>setOpen(true)}> <Icon src={Play}/> How it Works</Button>
           </Wrapper>
       </Right>
       {smallScreen && open &&(
           <Modal> 
               <Video  open={open}
           autoPlay
           loop
           controls
           src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
           />
           <CloseButton onClick={()=>setOpen(false)}>x</CloseButton>
           </Modal>
       )}
   </Container>
  )
}

export  {Services}