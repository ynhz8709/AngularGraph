import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PeopleService }  from '../../people.service';
import { People } from 'src/app/people';



@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit { 
  data: People[] = [];
  //  data: any[];
   filterQuery = "";
   rowsOnPage = 5;
   sortBy = "type";
   sortOrder = "asc";
   peoples: People[] = [];

  //var people
  name:string;
  lastname:string;
  age:string;
  sex:string;


constructor(private peopleService: PeopleService,private location: Location) { 
  this.sex='Female';
}

  ngOnInit(): void {    
     this.getPeoples();    
  }

  getPeoples(): void {
    this.peopleService.getPeople()
    .subscribe((people)=>{
      this.data=people
    });  
  }

  addPeople(event){
    event.preventDefault();
    const newpeople: People = {
      name:this.name,
      lastname:this.lastname,
      age: this.age,
      sex: this.sex,
      id: 0,
    }
    this.peopleService.addPeople(newpeople).subscribe((people) =>{
      const peoplenew: People = {
        id: people[0].id,
        name:people[0].name,
        lastname:people[0].lastname,
        age: people[0].age,
        sex: people[0].sex       
      }

      this.data.push(peoplenew);
    })
    this.name='';
    this.lastname='';
    this.age='';
  }

  deletePeople(id){
      this.peopleService.deletePeople(id)
      .subscribe((resp)=>{
        if(resp){
          const result = this.data.filter(c => c.id !== id);
          this.data=result;
        }
    });  
  }

  editPeople(people:People){
    this.peopleService.editPeople(people)
    .subscribe((peop)=>{
      this.data.map((obj,index)=>{
        if(obj.id==people.id){
          this.data[index]=peop[0];
        }
      })
  });  
}

  updatesex(data){
    this.sex=data;
  }

  goBack(): void {this.location.back()}

  //todo methods for datatable
  public toInt(num: string) {return +num;}

  public sortByWordLength =  (a: any) => {return a.city.length;}

  public remove(item) {
      let index = this.data.indexOf(item);
      if(index>-1) {
          this.data.splice(index, 1);
      }
  }

  
}

