import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: `./app/app.component.html`,
})
export class AppComponent implements OnInit {

   private pokemons: Pokemon[] = null;
   private title: string = "Pokémons";
   private value: string = '';

   ngOnInit() {
     this.pokemons = POKEMONS;
   }

   onClick(){
     console.log("Clic !");
   }

   onKey(event: keyboardEvent){
     this.value = 'Bonjour ' + (<HTMLInputElement>event.target).value;
   }

   selectPokemon(pokemon: Pokemon) {
     alert("Vous avez cliqué sur " + pokemon.name);
   }
 }
