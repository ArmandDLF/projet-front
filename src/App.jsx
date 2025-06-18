import { createSignal, For } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Menu/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App

function Menu(){
  var visible = true;
  const PageList = [
    //["Nom affiché", "adresse page"],
    ["Accueil","index"],
    ["Truc" , "truc.html"],
  ]
//≡
  const closeMenuAction = () => document.getElementById("menu_container").style.display="none";
  const openMenuAction = () => document.getElementById("menu_container").style.display="block";
  

  function CloseMenuButton(){
    return (
      <button class="menu_button" onClick={closeMenuAction}>X</button>
    )
  }

  function OpenMenuButton(){
    return (
      <button class="menu_button" id="menu_button_open" onClick={openMenuAction}>≡</button>
    )
  }

  return (
    <>
      <OpenMenuButton />

      <div id="menu_container">
        <CloseMenuButton />
        <For each={PageList}>
          {(menu_entry, index) => 
          <a href={menu_entry[1]} class="menu_entry">
              {menu_entry[0]}
          </a> }
        </For>
      </div>
    </>

  )
}
