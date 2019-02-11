import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit { 
   data: any[];
   filterQuery = "";
   rowsOnPage = 5;
   sortBy = "type";
   sortOrder = "asc";
constructor(private http: HttpClient,private location: Location) { }

  ngOnInit() {    
    // this.http.get("../assets/data.json")
    //         .subscribe((data)=> {
    //             setTimeout(()=> {
    //               console.log(data);
    //                 this.data = data;
    //             }, 2000);
    //         });
    this.getJSON().subscribe(data => {
      this.data=data['data'];
    });
  
  }
  getJSON(): Observable<any> {
      return this.http.get("../assets/crimeserver_list/crime_servers_list.json");     
  }

  goBack(): void {
    this.location.back();
  }

  public toInt(num: string) {
    return +num;
 }

  public sortByWordLength = (a: any) => {
      return a.city.length;
  }

  public remove(item) {
      let index = this.data.indexOf(item);
      if(index>-1) {
          this.data.splice(index, 1);
      }
  }
}
