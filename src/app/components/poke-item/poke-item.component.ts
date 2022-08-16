  import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.css']
})
export class PokeItemComponent implements OnInit {
  @Input() pokemonInfo :any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
