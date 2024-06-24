import './App.css'
import CharacterSearch from './components/CharacterSearch/CharacterSearch'

export default function App() {
  return (
    <div className="pageApp">
      <img id="imageTitle" src='./Rick_and_Morty.png'></img>
      <CharacterSearch />
    </div>
  )
}
