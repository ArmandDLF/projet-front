import { createSignal, For, onMount } from 'solid-js'
import pfp from './assets/pfp.jpg'
import './App.css'
import { Pages } from './index.jsx'
import defonten from './assets/24defonten.jpg'
import derivier from './assets/24derivier.jpg'
import liens from './assets/24liens.jpg'
import climaud from './assets/24climaud.jpg'

export const App = (props) => (
  <>
    <Menu />
    {props.children}
  </>
);



function Menu(){
  var visible = true;

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
        <For each={Pages}>
          {(menu_entry, index) => 
          <a href={menu_entry[1]} class="menu_entry">
              {menu_entry[0]}
          </a> }
        </For>
      </div>
    </>

  )
}

export function Association() {
  const team = [
    {
      name: "Armand",
      role: "Président",
      img: defonten,
      desc: "A moi le WEI, c'était bien sûr mon seul objectif !! A défaut d'avoir des compétences particulières j'ai beaucoup de 🌟 motivation 🌟et j'a-dore ne pas dormir"
    },
    {
      name: "Mathis",
      role: "Secrétaire général",
      img: liens,
      desc: "Son sérieux est inversement proportionnel à son nombre de collocataires, et ça ne l'empêchera pas d'être incroyablement gentil et méthodique pour faire rayonner l'association et tout organiser de l'intérieur."
    },
    {
      name: "Arthur",
      role: "Trésorier",
      img: climaud,
      desc: "Grand cumulard de la promo, comptez sur nous pour que ce soit uniquement dans les autres assos qu'il se claque"
    },
    {
      name: "Zéphyr",
      role: "Respo entreprise",
      img : derivier,
      desc: "Ce parisien a autant d'amour pour l'argent que pour coder en C++, ce qui n'est pas peu dire. Ce geek qui le dissimule comme il le peut, sera le plus à même d'utiliser ses talents de taupe pour nous dénicher les meilleurs partenariats."
    }
  ];

  return (
    <div class="association-page">
      <h1>Cahier vert</h1>
      <p>
        🍀 Cahier Vert 📗
On est des étudiants des Mines de Paris voulant faire découvrir le monde du supérieur aux collégiens/lycéens et soutenir les élèves vivant la prepa 🍀📗
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
       Cahier Vert, c’est l'association d'égalité des chances des Mines 🤝.
Elle mène des actions du collège à la prépa : découverte des filières scientifiques, ouverture culturelle, soutien scolaire et accompagnement psychologique.
Nous préparons activement l'année à venir et comptons sur les prochains Mineurs pour nous aider dans toutes nos actions !
Prêt·e·s à vous engager avec nous ? 💚
      </p>
    </div>
  );
}