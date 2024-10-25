import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}

  // es privado para que en otro lugar no haga las modificaciones de este servicio
  private _tagHistory: string[] = [];
  private apiKey: string = 'R1rtLiF8IaRSDIdtT2uU5naiozdfl0eD';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
  }

  get tagHistory() {
    return [...this._tagHistory];
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get(`${this.serviceUrl}/search`, { params })
      .subscribe((data) => console.log(data));
  }
}
