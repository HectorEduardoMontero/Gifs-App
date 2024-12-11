import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
