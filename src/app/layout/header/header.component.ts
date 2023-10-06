import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  account: Account = new Account();

  constructor( private router:Router){}
  ngOnInit(): void {
    this.username = localStorage.getItem('userName');
    this.roleID = localStorage.getItem('roleID').toString();
  }
  username: string;
  roleID: string;

  loggout(){
    localStorage.removeItem('userName')
    localStorage.removeItem('id')
    localStorage.removeItem('roleID')
    this.router.navigate(['/']);
  }

  checkLogin(){
    this.username = localStorage.getItem('userName') || '';
    if(this.username == '') return false;
    else{
      return true;
    }
    // const userName = JSON.parse(this.username);
    // return moment().isBefore(moment(userName));    
  }

  isAdmin(){
    this.roleID = localStorage.getItem('roleID') || '';
    if(this.roleID === '1'){
      return true;
    }
    else{
      return false;
    }
  }

  isCompany(){
    this.roleID = localStorage.getItem('roleID') || '';
    if(this.roleID === '2'){
      return true;
    }
    else {
      return false;
    }
  }
  

  }