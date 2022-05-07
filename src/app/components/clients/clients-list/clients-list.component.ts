import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/Client";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients?: Client[];
  currentClient: Client = {};
  currentIndex = -1;
  nom = '';

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe({
        next: (data) => {
          this.clients = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  setActiveClient(client: Client, index: number): void {
    this.currentClient = client;
    this.currentIndex = index;
  }

  // removeAllTutorials(): void {
  //   this.tutorialService.deleteAll()
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.refreshList();
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // searchTitle(): void {
  //   this.currentTutorial = {};
  //   this.currentIndex = -1;
  //
  //   this.tutorialService.findByTitle(this.title)
  //     .subscribe({
  //       next: (data) => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

}
