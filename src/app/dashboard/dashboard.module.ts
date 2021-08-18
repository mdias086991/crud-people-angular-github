import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { GitHubService } from '../services/gitHub.service';
import { UserService } from '../user/user.service';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
  DashboardRoutingModule,
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    GitHubService,
    UserService
  ]
})
export class DashboardModule { }
