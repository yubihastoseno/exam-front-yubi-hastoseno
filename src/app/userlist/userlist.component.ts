import { Component, OnInit } from '@angular/core';
import { APIService } from "../api.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private api:APIService) { }

  ngOnInit() {
    
  }

  DelUser(i){
    this.api.DelUser(i);
  }
}
