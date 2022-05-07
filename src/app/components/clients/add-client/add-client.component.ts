import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/Client";
import {ClientService} from "../../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  id!: number ;
  title!: string;
  client: Client = {
    nom: '',
    prenom: '',
    addresse: ''
  };
  submitted = false;

  constructor(private clientService: ClientService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.id)
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id === undefined) {
      this.title = ' ajouter compte';
    } else {
      this.title = 'editer compte';
    }
    console.log(this.title);
    if (!!this.id) {
      console.log(this.id);
      this.getClientDetails(this.id);
    } else {
      console.log("ghheheh")
    }

  }
  getClientDetails(id: any): void {
    this.clientService.getClientById(id)
      .subscribe({
        next: (data) => {
          this.client = data;
          console.log("dataaaaaaaaaa",data);
        },
        error: (e) => console.error(e)
      });
  }
  OnSubmit() {
    if (this.id === undefined) {

      this.saveClient();
      console.log('added');

    } else {
      this.updateClient();
    }
  }
  updateClient(): void {
    const data = {
      id: this.client.id,
      nom: this.client.nom,
      prenom: this.client.prenom,
      addresse: this.client.addresse
    };
    this.clientService.updateClient(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/list-clients']);
        },
        error: (e) => console.error(e)
      });
  }
  saveClient(): void {
    const data = {
      nom: this.client.nom,
      prenom: this.client.prenom,
      addresse: this.client.addresse
    };

    this.clientService.addClient(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/list-clients']);
        },
        error: (e) => console.error(e)
      });
  }



}
