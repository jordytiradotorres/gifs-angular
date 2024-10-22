import { Injectable } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private gifsService: GifsService) { }

  get gifsWanted() {
    return [...this.gifsService.tagHistory]
  }
}
