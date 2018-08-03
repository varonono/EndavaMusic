import {Component} from '@angular/core';
import {Song} from '../Song';
import {Genre} from '../genre';
import {SongService} from '../song.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private songService:SongService){}
  model = new Song('I want it all', 'Dr IQ', Genre.ROCK, 300, 3.4, false);

  submitted = false;

  onSubmit() {
    console.log("Submited");
    console.table(this.model);
    this.songService.postSong(this.model);
  }
}
