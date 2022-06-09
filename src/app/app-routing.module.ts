import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { areaAdminComponent } from './area-admin/area-admin.component';

const routes: Routes = [
  {
    path:'areaAdmin',
    component:areaAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
