import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/Client";
import {Compte} from "../../../models/Compte";
import {ClientService} from "../../../services/client.service";
import {CompteService} from "../../../services/compte.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrls: ['./list-comptes.component.css']
})
export class ListComptesComponent implements OnInit {
  comptesList!: Compte[]

  constructor(private clientService: ClientService,private compteService : CompteService ,private router: Router) { }
  ngOnInit(): void {
    this.getComptes();
  }

  getComptes(): void {
    this.compteService.getComptes()
      .subscribe({
        next: (data) => {
          this.comptesList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteCompte(rib : any) : void {
    this.compteService.deleteCompte(rib)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.getComptes();
          // this.router.navigate(['/comptes']);
        },
        error: (e) => console.error(e)
      });
  }




}
