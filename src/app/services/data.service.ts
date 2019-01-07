import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getMenuItemsUrl: string = '../../assets/menuItems.json';

  constructor(private http: HttpClient) { }

  // getMenuItems(): Observable<> {

  // }

}
