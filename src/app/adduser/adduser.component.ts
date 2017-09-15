import { Component, OnInit } from '@angular/core';
import { APIService } from "../api.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private api: APIService) { }

  ngOnInit() {

  }

  AddUser() {
    this.api.AddUser();
  }

}
