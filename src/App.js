import React, { useState, useEffect} from "react"
import './App.css';
//Components
import Name from "./components/Name"
import Image from "./components/Image"
import Info from "./components/Info"
import Restart from "./components/Restart"


function App() {
  const [data, setData] = useState()
  const [click, setClick] = useState()
  const [change, setChange] = useState("")
  
  const getURL = ()=> {
    let random = Math.floor(Math.random() * 200) + 1
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`
    return url
    
  }
  
  const url = getURL()
  
  useEffect(()=> {
    const getData = async ()=> {
      const res = await fetch(url)
      const response = await res.json()
      setData(response)
    }
    
    getData()
  }, [click])
  
  
  //Change colors
  const types = ["water", "normal", "rock", "fire", "ground", "dark", "electric", "psychic", "grass", "dragon", "ghost", "poison", "bug", "fairy", "fighting", "ice"]
  
  useEffect(()=> {
    const changeColors = ()=> {
      if(data !== undefined) {
        let res = types.filter(t => t === data.types[0].type.name)
        return setChange(`${res[0]}`)
      }
    }
    changeColors()
  }, [data])
  
  const changeClick = ()=> {
    setClick(!click)
  }

  return (
    <div className="App">
      <div className={`card card-${change}`}>
        <Name 
        name={data === undefined ? "" : data.name}
        type={data === undefined ? "" : data.types[0].type.name}
        />
        <Image 
        src={data === undefined ? "" : data.sprites.other.dream_world.front_default}
        alt={data === undefined ? "" : data.name}
        />
        <Info 
        cla={`info info-${change}`}
        hp={data === undefined ? "" : data.stats[0].base_stat}
        attack={data === undefined ? "" : data.stats[1].base_stat}
        defense={data === undefined ? "" : data.stats[2].base_stat}
        special_attack={data === undefined ? "" : data.stats[3].base_stat}
        special_defense={data === undefined ? "" : data.stats[4].base_stat}
        speed={data === undefined ? "" : data.stats[5].base_stat}
        />
      </div>
      <Restart
      cla={`restart info-${change}`} 
      Again={changeClick} 
      />
    </div>
  );
}

export default App;
