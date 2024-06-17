import styled from 'styled-components'

const GameContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GameItemsContainer = styled.div`
  width: 90%;
  max-width: 600px;
  text-align: center;
`
const GameTitle = styled.h1`
  color: #333;
  font-weight: bold;
  font-size: 35px;
  text-decoration: underline;
`
const GameScore = styled.p`
  color: black;
  font-style: italic;
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
`
const GameInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const GameBoard = styled.div`
  border: 3px solid black;
  padding: 10px;
  width: 100%;
`

const Tile = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px;
`
const GameDuration = styled.p`
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
`
const UserNameContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
  width: 100%;
`

const UserName = styled.h3`
  color: black;
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  text-decoration: underline;
`
const TilesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const TileImage = styled.img`
  height: 80px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
`
export {
  GameContainer,
  GameTitle,
  GameInfo,
  Tile,
  GameBoard,
  GameItemsContainer,
  GameScore,
  GameDuration,
  UserNameContainer,
  UserName,
  TilesContainer,
  TileImage,
}
