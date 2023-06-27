import React from 'react'
import styled from "styled-components"
import Navbar from "../component/Navbar"
import Announcement from "../component/Announcement"
import Products from "../component/Products"
import Newsletter from "../component/Newsletter"
import { mobile } from '../responsive'
const Container = styled.div``


const Title = styled.h1`
margin : 20px;
`

const FilterContainer = styled.div`
display : flex;
justify-content: space-between;
`

const Filter = styled.div`
margin : 20px;
display: flex;
align-items: center;
${mobile({ width: "0px 20px" , display : "flex" , flexDirection : "" })}

`;


const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 4px;
  ${mobile({ marginRight: "0px" })}
`;


const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  margin-left : 10px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :
          <Select name="color" >
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" >
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          </FilterText>
        </Filter>
        <Filter>
          <FilterText>Sort Products :</FilterText>
          <Select >
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
    </Container>
  )
}

export default ProductList
