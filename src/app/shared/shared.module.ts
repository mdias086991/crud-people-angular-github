import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    
  ],
  imports: [
    CommonModule,
    MegaMenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
