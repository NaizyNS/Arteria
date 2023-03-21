import Header from "./components/Header"
import Hero from "./components/Hero"
import Artworks from "./components/Artworks"
import Transactions from "./components/Transactions"
import Footer from "./components/Footer"
import CreateNFT from "./components/CreateNFT"
import ShowNFT from "./components/ShowNFT"
import UpdateNFT from "./components/UpdateNFT"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header/>
        <Hero/>
      </div>
      <Artworks/>
      <Transactions/>
      <Footer />
      <CreateNFT/>
      <ShowNFT/>
      <UpdateNFT/>
    </div>
  )
}

export default App
