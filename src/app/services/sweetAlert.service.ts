import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

constructor() { }

showMessage(params: any): any {
  return Swal.fire(params);
}

}
