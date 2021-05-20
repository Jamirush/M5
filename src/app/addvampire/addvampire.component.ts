import { Component, OnInit } from '@angular/core';
import { VampireM5 } from '../objects/vampire';

@Component({
  selector: 'app-addvampire',
  templateUrl: './addvampire.component.html',
  styleUrls: ['./addvampire.component.scss']
})
export class AddvampireComponent implements OnInit {
  constructor() { }
  public vampire: VampireM5;
  public showAttributes: boolean;
  public showCompetences: boolean;
  public showDisciplines: boolean;
  public showPredator: boolean;
  public showAvantages: boolean;
  public showConvictionAndTies: boolean;
  public showMistsOfTime: boolean;
  public attributs = [
    { name1: 'Force', comName1: 'strength', name2: 'Charisme', comName2: 'charisma', name3: 'Intelligence', comName3: 'intelligence' },
    { name1: 'Dextérité', comName1: 'dexterity', name2: 'Manipulation', comName2: 'manipulation', name3: 'Astuce', comName3: 'wit' },
    { name1: 'Vigueur', comName1: 'vigor', name2: 'Sang-froid', comName2: 'selfControl', name3: 'Résolution', comName3: 'resoluteness' },
];


  ngOnInit(): void {
    this.vampire = new VampireM5();
    this.vampire.generation = '13';
    this.vampire.strength = 1;
    this.vampire.dexterity = 1;
    this.vampire.vigor = 1;
    this.vampire.charisma = 1;
    this.vampire.manipulation = 1;
    this.vampire.selfControl = 1;
    this.vampire.intelligence = 1;
    this.vampire.wit = 1;
    this.vampire.resoluteness = 0;
    this.vampire.heal = 0;
    this.vampire.will = 0;
    this.vampire.firearms = 0;
    this.vampire.artsAndCrafts = 0;
    this.vampire.athletics = 0;
    this.vampire.brawl = 0;
    this.vampire.driving = 0;
    this.vampire.stealth = 0;
    this.vampire.larceny = 0;
    this.vampire.melee = 0;
    this.vampire.survival = 0;
    this.vampire.animals = 0;
    this.vampire.commandment = 0;
    this.vampire.empathy = 0;
    this.vampire.etiquette = 0;
    this.vampire.streetExperience = 0;
    this.vampire.intimidation = 0;
    this.vampire.performance = 0;
    this.vampire.persuasion = 0;
    this.vampire.subterfuge = 0;
    this.vampire.erudition = 0;
    this.vampire.finance = 0;
    this.vampire.investigation = 0;
    this.vampire.medicine = 0;
    this.vampire.occultism = 0;
    this.vampire.politics = 0;
    this.vampire.science = 0;
    this.vampire.technology = 0;
    this.vampire.vigilance = 0;
    this.showAttributes = false;
    this.showCompetences = false;
    this.showDisciplines = false;
    this.showPredator = false;
    this.showAvantages = false;
    this.showConvictionAndTies = false;
    this.showMistsOfTime = false;

  }

  setClan(clanName: string): void{
    this.vampire.clan = clanName;
  }

  setShowAttributes(value: boolean): void{
    this.showAttributes = value;
  }

  setShowCompetences(value: boolean): void{
    this.showCompetences = value;

  }

  setShowDisciplines(value: boolean): void{
    this.showDisciplines = value;

  }

  setShowPredator(value: boolean): void{
    this.showPredator = value;

  }

  setShowAvantages(value: boolean): void{
    this.showAvantages = value;

  }

  setShowConvictionAndTies(value: boolean): void{
    this.showConvictionAndTies = value;

  }

  setShowMistsOfTime(value: boolean): void{
    this.showMistsOfTime = value;

  }
  getAttributValue(name: string): number{
    switch (name) {
    case 'strength':
      return this.vampire.strength;
    case 'charisma':
      return this.vampire.charisma;
    case 'intelligence':
      return this.vampire.intelligence;
    case 'dexterity':
      return this.vampire.dexterity;
    case 'manipulation':
      return this.vampire.manipulation;
    case 'wit':
      return this.vampire.wit;
    case 'vigor':
      return this.vampire.vigor;
    case 'selfControl':
      return this.vampire.selfControl;
    case 'resoluteness':
      return this.vampire.resoluteness;
    }
  }

  setAttribut(name: string, value: number): void{
    switch (name) {
      case 'strength':
        this.vampire.strength = this.calculateDotValue(value, this.vampire.strength);
        break;
      case 'charisma':
        this.vampire.charisma = this.calculateDotValue(value, this.vampire.charisma);
        break;
      case 'intelligence':
        this.vampire.intelligence = this.calculateDotValue(value, this.vampire.intelligence);
        break;
      case 'dexterity':
        this.vampire.dexterity = this.calculateDotValue(value, this.vampire.dexterity);
        break;
      case 'manipulation':
        this.vampire.manipulation = this.calculateDotValue(value, this.vampire.manipulation);
        break;
      case 'wit':
        this.vampire.wit = this.calculateDotValue(value, this.vampire.wit);
        break;
      case 'vigor':
        this.vampire.vigor = this.calculateDotValue(value, this.vampire.vigor);
        break;
      case 'charisma':
        this.vampire.selfControl = this.calculateDotValue(value, this.vampire.charisma);
        break;
      case 'resoluteness':
        this.vampire.resoluteness = this.calculateDotValue(value, this.vampire.resoluteness);
        break;
    }
  }

  calculateDotValue( clickValue: number, currentValue: number, max: number = 5): number {

    console.log('clickValue : ' + clickValue + ' / ' + currentValue + ' / ' + max);

    let value = currentValue < clickValue ? currentValue + 1 : currentValue - 1;
    value = value < 0 ? 0 : (value > max ? max : value);
    console.log(value);
    return value;
  }

}
