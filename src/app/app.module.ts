import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AddClientComponent} from "./components/clients/add-client/add-client.component";
import {ClientDetailsComponent} from "./components/clients/client-details/client-details.component";
import {ClientsListComponent} from "./components/clients/clients-list/clients-list.component";
import { AddCompteComponent } from './components/comptes/add-compte/add-compte.component';
import { ListComptesComponent } from './components/comptes/list-comptes/list-comptes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ClientDetailsComponent,
    ClientsListComponent,
    AddCompteComponent,
    ListComptesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
