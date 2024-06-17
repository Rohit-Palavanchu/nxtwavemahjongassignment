/* Write your CSS here */
import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
  text-align: center;
`

const Title = styled.h1`
  color: black;
  text-decoration: underline;
`

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-top: 20px;
`

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  max-width: 65px;
  margin: 10px;
  cursor: pointer;
`
const PlayContainer = styled.div`
  border: 3px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`
export {Container, Title, Input, Button, PlayContainer}
