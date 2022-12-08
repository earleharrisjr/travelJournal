import './App.css'
import NavBar from './components/NavBar'
import TravelCards from './components/TravelCards'
import cardData from './cardData'

function App() {
  const cardElements = cardData.map(card => {
    return <TravelCards
      key={card.id}
      card={card}
    />
  })

  return (


    <div className="App">
      <NavBar />
      {cardElements}
    </div>
  )
}

export default App
