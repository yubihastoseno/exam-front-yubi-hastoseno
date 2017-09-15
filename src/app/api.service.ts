import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class APIService {
  name: string;
  email: string;
  address: string;
  phonenumber: string;
  companyname: string;
  UserList: object[] = [];

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.UserList = [];
        for (var i = 0; i < data.json().length; i++) {
          var user = data.json()[i];
          var obj = {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'phonenumber': user.phone,
            'address': user.address.street,
            'company': user.company.name
          };
          this.UserList.push(obj);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  DelUser(id): void {
    for (var i = 0; i < this.UserList.length; i++) {
      if (id == this.UserList[i]['id']) {
        this.UserList.splice(i, 1);
      }
    }
  }

  AddUser(): void {
    if (this.UserList.length != 0) {
      var lastId = this.UserList[this.UserList.length - 1]["id"];
      var obj: object = { "id": lastId + 1, "name": this.name, "email": this.email, "phone": this.phonenumber, "address": this.address, "company": this.companyname };
    }
    this.UserList.push(obj);
    console.log(this.name);
  }
}
