import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component'
import { ProductComponent } from './screens/admin/product/product.component';
import { ProductFormComponent } from './screens/admin/product-form/product-form.component';
import { HomeComponent } from './screens/client/home/home.component';
import { SanphamComponent } from './screens/client/sanpham/sanpham.component';
import { InfoComponent } from './screens/admin/info/info.component';
import { DetailComponent } from './screens/client/detail/detail.component';
import { DetailAdminComponent } from './screens/admin/detail-admin/detail-admin.component';

const routes: Routes = [

  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'',
        component:InfoComponent
      },

      {
        path :'product',
        component:ProductComponent
      },
      {
        path :'product/form',
        component:ProductFormComponent
      },
      {
        path :'product/form/:id',
        component:ProductFormComponent
      },
      {
        path :"sanpham/:id",
        component:DetailAdminComponent
      }
    ]

  },
  {
    path :"client",
    component:HomeComponent,
    children:[
      {
        path:'',
        component:InfoComponent
      },
      {
        path :"sanpham",
        component:SanphamComponent
      },
      {
        path :"sanpham/:id",
        component:DetailComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
