import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../models/Client";
import {ClientService} from "../../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Compte} from "../../../models/Compte";
import {CompteService} from "../../../services/compte.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {
  clientList!: Client[]
  solde!: number;
  client1!: Client;
  rib!: number ;


  submitted = false;
  title!: string
  constructor(private clientService: ClientService,
              private compteService: CompteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.client1)
    this.getClients();
    this.rib = this.activatedRoute.snapshot.params['id'];

    if (this.rib === undefined) {
      this.title = ' ajouter compte';
    } else {
      this.title = 'editer compte';
    }
    console.log(this.title);
    if (!!this.rib) {
      console.log(this.rib);
      this.getCompteDetails();
    } else {
      console.log("ghheheh")
    }

  }
  OnSubmit() {
    if (this.rib === undefined) {

      this.saveCompte();
      console.log('added');

    } else {
      this.updateCompte();
    }
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe({
        next: (data) => {
          this.clientList = data;

        },
        error: (e) => console.error(e)
      });
  }

  saveCompte(): void {
    const data = {
      client: this.client1,
      solde: this.solde,

    };
    console.log("dataaaaaaaaaaaaaaaaaaaaaaaaa",data);

    this.compteService.addCompte(data)
      .subscribe({

        next: (res) => {
          console.log(res);
          this.submitted = true;
          if(this.submitted){
          this.router.navigate(['/list-comptes']);
        }},
        error: (e) => console.error(e)
      });
  }

  updateCompte() {
    const data = {
      solde: this.solde,
      rib: this.rib,
    };

    this.compteService.updateCompte( data)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/list-comptes']);
        },
        error: (e) => console.error(e)
      });

  }

  private getCompteDetails() {
    this.compteService.getCompteByRib(this.rib).subscribe({
      next: (res) =>{
        this.solde = res.solde;
        this.client1 =res.client;
        console.log("client1",this.client1)
      }
    });
  }

}
