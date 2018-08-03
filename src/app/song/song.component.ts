import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  public rock;

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getRock().subscribe(data => {this.rock = data; });
  }


}
