import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SongService } from './song.service';
import { AdminComponent } from './components/admin/admin.component';
import {AppRoutingModule} from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { SongComponent } from './song/song.component';
import { AddComponent } from './add/add.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SongComponent,
    AddComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
