import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  public characters: Character[]=[{
    id: uuid(),
    name:'Goku',
    power:63000
    },{
    id: uuid(),
    name: 'Krilin',
    power:42000,
  },{
    id: uuid(),
    name: 'Vegeta',
    power:30000,
  }];

  addCharacter( character:Character):void{
    const newCharacter: Character = {id:uuid(),...character};
    this.characters.push(newCharacter);
  }
  onDeleteCharacterById (id:String){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
