import { Component} from '@angular/core';
import {Http} from '@angular/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  myData: Array<any>;
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

   myControl: FormControl = new FormControl();
  
    options = [
      'Indian',
      'American',
      'Chinese',
      'Greek',
    ];
  
    filteredOptions: Observable<string[]>;
  
     ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
           .startWith('')
           .map(val => this.filter(val));
     }
  
      filter(val: string): string[] {
        return this.options.filter(option =>
          option.toLowerCase().indexOf(val.toLowerCase()) === 0);
     } 

     
  constructor(private http:Http){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(response => response.json())
    .subscribe(res => this.myData = res)
  }
  

}
