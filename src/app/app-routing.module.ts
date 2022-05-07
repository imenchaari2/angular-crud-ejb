import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddClientComponent} from "./components/clients/add-client/add-client.component";
import {ClientDetailsComponent} from "./components/clients/client-details/client-details.component";
import {ClientsListComponent} from "./components/clients/clients-list/clients-list.component";
import {AddCompteComponent} from "./components/comptes/add-compte/add-compte.component";
import {ListComptesComponent} from "./components/comptes/list-comptes/list-comptes.component";

const routes: Routes = [
  { path: '', redirectTo: 'list-clients', pathMatch: 'full' },
  { path: 'list-clients', component: ClientsListComponent },
  { path: 'list-comptes', component: ListComptesComponent },
  { path: 'list-comptes/:id', component: ListComptesComponent },
  { path: 'clients/:id', component: AddClientComponent },
  { path: 'comptes/:id', component: AddCompteComponent },
  { path: 'add-compte', component: AddCompteComponent },
  { path: 'add-client', component: AddClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
