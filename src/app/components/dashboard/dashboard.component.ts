import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  titles=['Bots','Credentials','Credit Cards','CrimeServe','Malware'];
  titlesvalue=[];
  name='Bots';


  constructor(private http: HttpClient) { }
  
  ngOnInit(){
    this.titles.map((e)=>{
      this.getJSON(e).subscribe(data => {
        this.titlesvalue[e]= data.data[0]['attributes']['count'];
      });
    })
  }
  
  getJSON(params): Observable<any> {
    let result;
    switch(params){
      case 'Bots':
      result= this.http.get("../assets/dashboard/widgets/bots_count.json")   
      break;
      case 'Credentials':
      result= this.http.get("../assets/dashboard/widgets/credentials_count.json")   
      break;
      case 'Credit Cards':
      result= this.http.get("../assets/dashboard/widgets/credit_cards_count.json")   
      break;
      case 'CrimeServe':
      result= this.http.get("../assets/dashboard/widgets/crime_servers_count.json")   
      break;
      case 'Malware':
      result= this.http.get("../assets/dashboard/widgets/malware_count.json")   
      break;
    }
    return result;
  }

  updategraph(name): void {    
    this.name=name;
  }
}
