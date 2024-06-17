import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import _ from 'lodash'
import Cookies from 'js-cookie'
import ironman from '../../img/ironman.png'
import captainamerica from '../../img/captainamerica.png'
import hulk from '../../img/hulk.png'
import blackpanther from '../../img/blackpanther.png'
import blackwidow from '../../img/blackwidow.png'
import hawkeye from '../../img/hawkeye.png'
import flipicon from '../../img/flipicon.png'
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
  TilesContainer,
  TileImage,
} from './styledComponents'

const array = [
  {
    id: uuidv4(),
    iconUrl: ironman,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: ironman,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: hulk,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: hulk,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: captainamerica,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: captainamerica,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: blackpanther,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: blackpanther,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: blackwidow,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: blackwidow,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: hawkeye,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
  {
    id: uuidv4(),
    iconUrl: hawkeye,
    flipiconUrl: flipicon,
    matched: false,
    clicked: false,
  },
]
const shufflearray = _.shuffle(array)

const TileItem = props => {
  const {tileItem, handleTileClick} = props
  const onClickTileItem = () => {
    handleTileClick(tileItem)
  }
  const {iconUrl, flipiconUrl, clicked} = tileItem
  return (
    <TileImage
      disabled={clicked}
      onClick={onClickTileItem}
      src={clicked === true ? iconUrl : flipiconUrl}
    />
  )
}

class Game extends Component {
  state = {
    ellapsedSeconds: 0,
    name: Cookies.get('name'),
    tilesArray: shufflearray,
    tempArray: [],
    score: 0,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        ellapsedSeconds: prevState.ellapsedSeconds + 1,
      }))
    }, 1000)
  }

  componentWillUnmount() {
    console.log('hi')
    clearInterval(this.interval)
  }

  handleTileClick = tile => {
    this.setState(
      prevState => {
        const updatedTileInfo = prevState.tilesArray.map(i => {
          if (i.id === tile.id) {
            return {...i, clicked: true}
          }
          return i
        })
        return {
          tilesArray: updatedTileInfo,
          tempArray: [...prevState.tempArray, tile],
        }
      },
      () => {
        const {tempArray} = this.state
        if (tempArray.length === 2) {
          this.checkMatch()
        }
      },
    )
  }

  checkAllTilesMatched = () => {
    const name = Cookies.get('name')
    const {tilesArray, score, ellapsedSeconds} = this.state
    const {history} = this.props
    const allMatched = tilesArray.every(tile => tile.clicked)
    if (allMatched) {
      history.replace('/scorepage', {score, ellapsedSeconds, name})
    }
  }

  checkMatch = () => {
    const {tempArray} = this.state
    const [tile1, tile2] = tempArray
    let match = false
    if (tile1.iconUrl === tile2.iconUrl && tile1.id !== tile2.id) {
      match = true
      this.setState(
        prevState => ({
          score: prevState.score + 1,
          tilesArray: prevState.tilesArray.map(tile =>
            tile.id === tile1.id || tile.id === tile2.id
              ? {...tile, matched: true}
              : tile,
          ),
          tempArray: [],
        }),
        this.checkAllTilesMatched,
      )
    } else if (tile1.id !== tile2.id) {
      this.setState(
        prevState => ({
          score: prevState.score - 1,
          tempArray: [],
        }),
        this.checkAllTilesMatched,
      )
    }
    return match
  }

  renderTime() {
    const {ellapsedSeconds} = this.state
    const minutes = Math.floor(ellapsedSeconds / 60)
    const seconds = ellapsedSeconds % 60
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`
  }

  render() {
    const {name, tilesArray, score} = this.state
    return (
      <GameContainer>
        <GameItemsContainer>
          <GameTitle>Mahjong Game</GameTitle>
          <GameInfo>
            <GameScore>Score: {score}</GameScore>
            <GameDuration>Time: {this.renderTime()}</GameDuration>
          </GameInfo>
          <GameBoard>
            <UserNameContainer>
              <UserName>Welcome {name} 👋👨</UserName>
            </UserNameContainer>
            <TilesContainer>
              {tilesArray.map(i => (
                <TileItem
                  key={i.id}
                  tileItem={i}
                  handleTileClick={this.handleTileClick}
                />
              ))}
            </TilesContainer>
          </GameBoard>
        </GameItemsContainer>
      </GameContainer>
    )
  }
}
export default Game
