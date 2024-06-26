import './App.css'
import Hero from '../components/Hero/Hero'
import BuildBy from '../components/BuildBy/BuildBy'
import Cod from '../components/Cod/Cod'
import CardSlider from '../components/CardSlider/CardSlider'
import Packages from '../components/Packages/Packages'
import Footer from '../components/Footer/Footer'
import cardData from '../components/CardSlider/CardData'

function App() {

  return (
    <>
      <Hero />
      <BuildBy />
      <Cod />
      <CardSlider cardData={cardData} />
      <Packages />
      <Footer />
    </>
  )
}

export default App