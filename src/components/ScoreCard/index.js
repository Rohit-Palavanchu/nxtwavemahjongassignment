import {useLocation} from 'react-router-dom'
import {
  GameContainer,
  GameTitle,
  GameInfo,
  GameItemsContainer,
  GameBoard,
  GameScore,
  GameDuration,
  UserNameContainer,
  UserName,
  ScoreContainer,
  ScoreInfoTag,
  TimeTag,
} from './styledComponents'

const ScoreCard = () => {
  const location = useLocation()
  console.log(location.state.score)
  const renderTime = () => {
    const minutes = Math.floor(location.state.ellapsedSeconds / 60)
    const seconds = location.state.ellapsedSeconds % 60
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`
  }
  return (
    <>
      <GameContainer>
        <GameItemsContainer>
          <GameTitle>Game Finished</GameTitle>
          <GameInfo>
            <GameScore>Score: {location.state.score}</GameScore>
            <GameDuration>Time: {renderTime()}</GameDuration>
          </GameInfo>
          <GameBoard>
            <UserNameContainer>
              <UserName>Welcome {location.state.name} 👋👨</UserName>
            </UserNameContainer>
            <ScoreContainer>
              <ScoreInfoTag>Score: {location.state.score}</ScoreInfoTag>
              <TimeTag>Time: {renderTime()}</TimeTag>
            </ScoreContainer>
          </GameBoard>
        </GameItemsContainer>
      </GameContainer>
    </>
  )
}
export default ScoreCard
