import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {SongComponent} from './song/song.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'song', component: SongComponent },
  { path: 'add', component: AddComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
