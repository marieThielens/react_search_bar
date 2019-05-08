import React, { Component } from 'react';
// import Network from '../Network';
import '../css/App.css';
// import de la variable qui contient l'objet et ses données
import { lieu } from './lieu/lieuData';
// import de la classe Establishment. 
import Establishment from './lieu/establishment';

class App extends React.Component {
  // Appeler le constructeur père. Le constructeur à comme paramètre props
  constructor(props) {
    // super appelle le constructeur parent (ce qu'il y a dans return)
    super(props);
    this.state = {
      // pseudo: "Inconnu",
      // Ici se trouve la valeur de l'input
      searchStringUser: "",
    }
  }

// Fonction qui recupère l'event de l'input et recupére sa valeur pour la mettre dans le state
  handleChange(e){
    this.setState({searchStringUser: e.target.value});
    // this.setState({pseudo: e.target.value});
  }

  // nomFonction = () => {} nous permet de conserver le contexte this du scope courant
  randomPseudo = () => {
    let randomPseudo = ""
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const size = Math.floor(Math.random() * 10) +5
    for(let i=0; i < size; i++){
      randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    // On met à jour le state via la fonction setState héritée de la classe Component
    this.setState({
      pseudo : randomPseudo
    })
  }

  render() {
    const establishmentFilter = lieu.filter((searchText) => {
    let search = searchText.name + " " + searchText.description;
    return search.toLowerCase().match(this.state.searchStringUser);
})

const listEstablishment = establishmentFilter.map( (establishment) => {
  return (
      <Establishment
          key={ establishment.id }
          establishment={ establishment } 
      />
  )
})
return (
  <div className="App">
    <header className="App-header">
      <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
    </header>
    <div className="App-intro">
        {/* On appelle notre fonction lors du clic sur le lien */}
        <p> <a onClick={ this.randomPseudo } >Chercher un bar : </a> </p>
        <div>
            <input
                type="text"
                placeholder="search"
                value={this.state.searchStringUser}
                onChange={this.handleChange.bind(this)}
            />
        </div>
        <section>
            { listEstablishment }
        </section>
    </div>
  </div>
);
}
}

export default App;
