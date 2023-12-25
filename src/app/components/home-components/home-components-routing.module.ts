import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {FarmerComponent} from './farmer/farmer.component';
import {FarmerRegComponent} from './farmer-reg/farmer-reg.component';
import {StaffComponent} from './staff/staff.component';

const loginRoutes: Routes = [
    { path: '', redirectTo: '/home/farmer-reg', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent  },
    { path: 'staff', component: StaffComponent },
    { path: 'farmer', component: FarmerComponent },
    { path: 'farmer-reg', component: FarmerRegComponent },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})


export class HomeComponentsRoutingModule { }
