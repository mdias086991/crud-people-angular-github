import { Component, OnInit } from '@angular/core';
import { User, UserService } from './../../user/user.service';
import { GitHubService, UserGitHub } from './../../services/gitHub.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userGit: UserGitHub;
  public user: User[]
  public usersGitHub: Array<UserGitHub> = [];
  constructor(private userService: UserService, private userGitService: GitHubService) { }
  display = false;
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUser().subscribe((result: User[])=>{
      this.user = result;
      this.user.map((e) => {
        this.getUsersGit(e.usuario_github);
      })
    })
  }
  
  getUsersGit(user: string) {
    this.userGitService.getGitHubData(user).subscribe((result: UserGitHub) => {
      this.userGit = result;
      this.usersGitHub.push(this.userGit);
      console.log(this.usersGitHub);
    });
  }

}
