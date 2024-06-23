import styled from "styled-components"


export const Container = styled.div`
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;


.rec.rec-arrow {
    background-color:  #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
}
.rec.rec-arrow:desabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
}

`
export const RodapeImg = styled.img`
width:100%;
margin-top: 15px;
`

export const CategoryImg = styled.img`
display: flex;
align-items: center;
`

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #e5e5e5;
border-radius: 32.64px;
width:313.39px;
height:428.63px;
justify-content: space-between;

p{
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 120%;
    color: #424242;
}
`

export const Image = styled.img`
width: 200px;
border-radius: 10px;
`

export const Button = styled.button`
margin-top: 16px;
margin-bottom: 12px;
background: #9758a6;
border-radius: 8px;
width: 90%;
height: 50px;
border: none;

font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 100%;
text-align: center;
color: #ffffff;

cursor: pointer;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}
`