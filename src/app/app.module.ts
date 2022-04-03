import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductComponent } from './screens/admin/product/product.component';
import { ProductFormComponent } from './screens/admin/product-form/product-form.component';
import { HomeComponent } from './screens/client/home/home.component';
import { ClientComponent } from './layout/client/client.component';
import { InfoComponent } from './screens/admin/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductComponent,
    ProductFormComponent,
    HomeComponent,
    ClientComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
