import {Genre} from './genre';

export class Song {

  title: string;
  artist: string;
  genre: Genre;
  durationInSeconds: number;
  rating: number;
  favorited: boolean;

  constructor(

    title: string,
    artist: string,
    genre: Genre,
    durationInSeconds: number,
    rating: number,
    favorited: boolean) {
  }


}
