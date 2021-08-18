import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from '../user.service';
import { SweetAlertService } from './../../services/sweetAlert.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public cadastroForm: FormGroup;
  @Input('showForm') showForm: boolean = false
  public user: User

  constructor(
    private constructForm: FormBuilder,
    private userService: UserService,
    private route: Router,
    private sweetAlertService: SweetAlertService
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.constructForm.group({
      nome:[''],
      sobrenome:[''],
      email:[''],
      CEP:[''],
      telefone:[''],
      cidade:[''],
      usuario_github:[''],
      endereco:['']
    })

  }
  onSubmit(): void {
    if(this.cadastroForm.valid && !this.cadastroForm.pending) {
      const novoUsuario = this.cadastroForm.getRawValue() as User
      this.userService.saveUser(novoUsuario).toPromise().then((newUser: User)=> {
        this.sweetAlertService.showMessage({
          icon: 'success',
          title: `${novoUsuario.nome}, foi criado com sucesso`,
          showConfirmButton: false,
          timer: 1500
        })
        window.location.reload
      } ).catch(e=> {
        this.sweetAlertService.showMessage({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao salvar usuario',
        })
      }) 
    }
  }

}
