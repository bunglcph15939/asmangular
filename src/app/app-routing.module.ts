import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component'
import { ProductComponent } from './screens/admin/product/product.component';
import { ProductFormComponent } from './screens/admin/product-form/product-form.component';
import { HomeComponent } from './screens/client/home/home.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[

      {
        path :'product',
        component:ProductComponent
      },
      {
        path :'product/form',
        component:ProductFormComponent
      },
    ]

  },
  {
    path :"client",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
