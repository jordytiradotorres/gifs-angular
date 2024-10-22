import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor() { }

  // es privado para que en otro lugar no haga las modificaciones de este servicio
  private _tagHistory: string[] = []

  get tagHistory() {
    return [...this._tagHistory]
  }

  public searchTag(tag: string): void {
    this._tagHistory.unshift(tag)
  }

}
