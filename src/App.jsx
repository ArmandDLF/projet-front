import { createSignal, For, onMount } from 'solid-js'
import pfp from './assets/pfp.jpg'
import './App.css'
import { Pages } from './index.jsx'
import defonten from './assets/24defonten.jpg'
import derivier from './assets/24derivier.jpg'
import liens from './assets/24liens.jpg'
import climaud from './assets/24climaud.jpg'

import logo_mines from './assets/logo_mines.png'
import logo_h4 from './assets/logo_lycee_henri4.jpg'
import logo_dauphine from './assets/logo_dauphine.png'

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
              src={member.img ?? pfp}
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


export function Partenaires() {
  const partenaires = 0;

  return (<>

  <header>
    <h1>Nos Partenaires</h1>
    <p>Merci à tous ceux qui soutiennent notre association</p>
  </header>

  <div class="container">

    <div class="partenaire">
      <img src="src/assets/logo_mines.png" alt="Logo Mines"/>
      <div class="partenaire-info">
        <h2>Mines de Paris</h2>
        <p>L'école a toujours été un soutien considérable pour l'association, tant par la réalisation de journée autour de la science enseignée aux jeunes dans ses murs, que dans la place considérable qu'elle donne à Cahier Vert chaque année.</p>
      </div>
    </div>

    <div class="partenaire">
      <img src="src/assets/logo_lycee_henri4.jpg" alt="Logo lycée Henri 4"/>
      <div class="partenaire-info">
        <h2>Lycée Henri 4</h2>
        <p>Nous collaborons avec le Lycée Henri 4 depuis de nombreuses années pour aider les élèves qui y seraient en difficulté, notamment ceux ayant fait un lycée un peu moins presitigieux, et pour qui le saut de la classe prépa est grand.</p>
      </div>
    </div>

    <div class="partenaire">
      <img src="src/assets/logo_dauphine.png" alt="Logo Paris Dauphine"/>
      <div class="partenaire-info">
        <h2>Université Paris Dauphine</h2>
        <p>L'université est un grand partenaire de la vie associative en général aux Mines, mais nos permet à Cahier vert de décupler notre force d'action, notamment pour les sorties organisées par le pôle collège.</p>
      </div>
    </div>

  </div>
  
  </>);
}