import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTableModule} from '@angular/material/table'
import {MatListModule} from '@angular/material/list'
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChucknorrisComponent } from './chucknorris/chucknorris.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { ChuckwarsComponent } from './chuckwars/chuckwars.component';
import { AppEvents } from './Appevents';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppListComponent } from './app-list/app-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ChucknorrisComponent,
    StarwarsComponent,
    SearchresultsComponent,
    ChuckwarsComponent,
    AppListComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path:'home',component:AppListComponent},
    {path:'searchresults',component:SearchresultsComponent},
    {path:'chucknorris',component:ChucknorrisComponent},
    {path:'starwars',component:StarwarsComponent},
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'**',component:NotFoundComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
