import styled from 'styled-components'
import Background from '../../assets/backwhiteburger.svg'
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;

 `

export const LoginImage = styled.img`
  display: flex;
  height: 500px;
  width: 500px;
  border-radius: 15px 0 0 15px;
  
 `

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 15px 15px 0;
  height: 70%;
  padding: 40px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
 

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
  }
  img {
    height: 150px;
    margin-top: 30px;
    
  }

 `

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 5px;


 `

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 8px;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
 `

export const Button = styled.button`
  width: 182.81px;
  height: 36px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 25px;
 

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;


  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }


 `

export const SignLink = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
 `
 export const ErrorMessage = styled.p`
 font-style: normal;
 font-weight: normal;
 font-size: 14px;
 line-height: 16px;
 color: #cc1717;
 margin-top: 2px;
 
 `