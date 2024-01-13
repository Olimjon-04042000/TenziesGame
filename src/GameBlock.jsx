import Buttons from "./Buttons"



function GameBlock() {
  return (
    <div className="game-block">
      <h2 className="title">Tenzies</h2>
      <p className="desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <Buttons />
      <button className="roll-btn">Roll</button>
    </div>
  )
}

export default GameBlock