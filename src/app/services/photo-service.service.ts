import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../interfaces/Image';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any>('assets/data/photos.json')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
    }
}
