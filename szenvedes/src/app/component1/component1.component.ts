import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
constructor (private router : Router) {}

jump(params:string) {
  
  this.router.navigate([`${params}`])
}

}