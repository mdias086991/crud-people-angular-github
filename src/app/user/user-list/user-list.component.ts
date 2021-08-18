import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from 'src/app/services/sweetAlert.service';
import { User, UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public showForm: Boolean = false;
  public user: User[];
  constructor(private userService: UserService, private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    this.getListItem();
  }

  getListItem() {
    this.userService.getAllUser().subscribe((users: User[])=> {
      this.user = users
    })
  }
  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.getListItem();
  }

  showUser(user: string) {}

  deleteUser(user_id: number) {
    this.userService.deleteUser(user_id).toPromise().then((user) => {
      this.sweetAlertService.showMessage({
        icon: 'success',
        title: `O usuario foi deletado com sucesso`,
        showConfirmButton: false,
        timer: 1500
      })
      this.getListItem();
    }).catch((e) => {
      this.sweetAlertService.showMessage({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao deletar usuario',
      })
    })
  }

  updateUser() {}

}
