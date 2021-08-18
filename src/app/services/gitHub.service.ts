import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserGitHub {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  repos_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

constructor(private http: HttpClient) { }

public gitHubHost: string = "https://api.github.com/users"

public getGitHubData(user: string): Observable<UserGitHub> {
  return this.http.get<UserGitHub>(`${this.gitHubHost}/${user}`);
} 



}
