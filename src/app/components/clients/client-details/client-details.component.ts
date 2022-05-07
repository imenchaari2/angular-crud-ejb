import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Client} from "../../../models/Client";
import {ClientService} from "../../../services/client.service";
import {CompteService} from "../../../services/compte.service";

@Component({
  selector: 'app-clients-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentClient: Client = {
    nom: '',
    prenom: '',
    addresse: ''
  };

  message = '';

  constructor(
    private clientService: ClientService,
    private compteService: CompteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getClient(this.route.snapshot.params["id"]);
    }
  }

  getClient(id: any): void {
    this.clientService.getClientById(id)
      .subscribe({
        next: (data) => {
          this.currentClient = data;
          console.log("dataaaaaaaaaa",data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteClient(): void {
    this.clientService.deleteClient(this.currentClient.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/list-clients']);
        },
        error: (e) => console.error(e)
      });
  }


}
