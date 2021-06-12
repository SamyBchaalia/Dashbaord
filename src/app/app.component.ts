import { Component,OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router} from "@angular/router"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  title = 'Tynass Dashboard';
  isExpanded: boolean = true;
  ngOnInit(): void {
  }
  
}
