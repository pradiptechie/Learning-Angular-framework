import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponentsRoutingModule} from './home-components-routing.module';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';
import { FarmerComponent } from './farmer/farmer.component';
import { FarmerRegComponent } from './farmer-reg/farmer-reg.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponentsRoutingModule,
    StaffComponent, AdminComponent, FarmerComponent, FarmerRegComponent
  ]
})
export class HomeComponentsModule { }
