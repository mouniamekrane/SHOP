
import React from 'react'
import styled from 'styled-components'
import { Search } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from '../responsive';

const Container = styled.div`
height : 60px ;
${mobile({height : "50px"})}
`

const Wrapper = styled.div`
padding : 10px 20px;
display: flex;
justify-content : space-between ;
align-items: center;
${mobile({padding : "10px 0px"})};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.div`
  border: none;
  border-color : gray;
  width: 170px;
  ${mobile({width : "50px"})}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display : "none"})}
`;

const Logo = styled.h2`
font-weight : bold;
${mobile({ fontSize: "24px" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Center = styled.div`
flex : 1;
text-align: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content:  flex-end;
  gap: 15px;
  margin-right: 20px;
  ${mobile({ flex: 2, justifyContent: "center" })}
  `

const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{color:"gray" , fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>HOUSE OF COUTURE </Logo>
                </Center>
                <Right>
                  <MenuItem>REGISTER</MenuItem>
                  <MenuItem>SIGN IN</MenuItem>
                  <MenuItem>
                  <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined />
                  </Badge>
                  </MenuItem>    
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
