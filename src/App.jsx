import { createSignal, For, onMount } from 'solid-js'
import pfp from './assets/pfp.jpg'
import './App.css'

function App() {

  return (
    <>
      <Menu/>
      <Association />
    </>
  )
}

export default App

function Menu(){

  onMount(() => {
    const menu = document.getElementById("menu_container");
    if (menu) menu.style.display = "none";
  });

  var visible = true;
  const PageList = [
    //["Nom affiché", "adresse page"],
    ["Accueil","index"],
    ["Nos activités" , "truc.html"],
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

function Association() {
  const team = [
    {
      name: "Alice",
      role: "Présidente",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex."
    },
    {
      name: "Bob",
      role: "Trésorier",
      desc: "Mauris dapibus risus quis suscipit vulputate. Egestas purus viverra accumsan in nisl nisi."
    },
    {
      name: "Charlie",
      role: "Secrétaire",
      desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    }
  ];

  return (
    <div class="association-page">
      <h1>L'Association</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
      </p>
      <h2>L'équipe</h2>
      <div class="team-list">
        {team.map(member => (
          <div class="team-member" style={{ display: "flex", alignItems: "center", marginBottom: "1em" }}>
            <img
              src={pfp}
              alt="Profil"
              style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "1em", objectFit: "cover" }}
            />
            <div>
              <h3>{member.name} - {member.role}</h3>
              <p>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Notre histoire</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
    </div>
  );
}