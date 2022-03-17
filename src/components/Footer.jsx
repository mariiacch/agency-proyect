
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height:10%;
background-color:#111;
color:lightgrey;
    
`

const Wrapper = styled.div`
padding:20px;
display:flex;
justify-content:space-between;
    
`
const List = styled.ul`
    padding:0;
    margin:0;
    list-style:none;
    display:flex;
    @media only screen and (max-width:480px){
  font-size:12px;
  
}
`
const ListItem = styled.li`
margin-right:20px;
    
`
const Copyright = styled.span`
display:flex;
justify-content:center;
@media only screen and (max-width:480px){
  font-size:12px;
  
}
    
`
const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <List>
                <ListItem>Guide</ListItem>
                <ListItem>Support</ListItem>
                <ListItem>API</ListItem>
                <ListItem>Community</ListItem>
            </List>
            <Copyright> Maria dev ©</Copyright>
         </Wrapper>
    </Container>
  )
}

export default Footer