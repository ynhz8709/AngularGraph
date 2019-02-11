import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data)
    });
  }

  public getJSON(): Observable<any> {
        return this.http.get("./assets/dashboard/widgets/bots_count.json")
     
  }
}