import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlertService } from '../services/sweetAlert.service';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent
  ],
  imports: [
  UserRoutingModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    SweetAlertService
  ]
})
export class UserModule { }
