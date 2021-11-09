import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/Client";
import {ClientService} from "../../../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    nom: '',
    prenom: '',
    addresse: ''
  };
  submitted = false;

  constructor(private clientService: ClientService,private router: Router) { }

  ngOnInit(): void {
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

  newClient(): void {
    this.submitted = false;
    this.client = {
      nom: '',
      prenom: '',
      addresse: ''
    };
  }

}
