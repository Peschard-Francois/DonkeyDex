import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../service/data.service";


@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  pokemons : any[] = [];
  pokeTableau = this.pokemons;




  constructor(private dataservice : DataService) {
  }

  ngOnInit(): void {
    this.dataservice.getPokemons()
      .subscribe((response : any) => {
        response.results.forEach((result: { name: string; }) => {
        this.dataservice.getMoreData(result.name)
          .subscribe((uniqResponse : any) => {
            this.pokemons.push(uniqResponse);

          });
        });
       });
    console.log(this.pokemons.sort((a,b) =>  a.id.localeCompare(b.id )))
  }
}






