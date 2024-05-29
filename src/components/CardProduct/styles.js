import styled from 'styled-components'

export const Container = styled.div`
background: #ffffff;
box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
border-radius: 30px;
display: flex;
padding: 16px;
gap: 12px;
width: 400px;


div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
}

`

export const Image = styled.img`
width: 150px;

`

export const ProductName = styled.p`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #000000;
`

export const ProductPrice = styled.p`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
margin-top:30px;
color: #000000;
`

