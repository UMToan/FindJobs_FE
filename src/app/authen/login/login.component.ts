import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/model/account';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: Account = new Account();
  
  constructor(private accountService:AccountService, private router:Router){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.account);
    
    this.accountService.login(this.account).subscribe(
      (data)=> {
      this.account = data; 
      localStorage.setItem('userName',this.account.userName);
      localStorage.setItem('id',this.account.id.toString());
      localStorage.setItem('roleID',this.account.roleId.toString());

      console.log(data);
      
      if(this.account.roleId === 1){
        this.router.navigate(['']);
      } else if (this.account.roleId === 2){
        this.router.navigate(['']);
      } else if (this.account.roleId === 3){
        this.router.navigate(['']);
      }    
      else{
        window.alert('check pass')
      }
        
    })
  }

}
