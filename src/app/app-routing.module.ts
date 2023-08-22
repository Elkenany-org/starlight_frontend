import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'product-details/:id',
    component:ProductDetailsComponent
  },

  {
    path:'events',
    component:BlogComponent
  },
  // {
  //   path:'blog',
  //   component:BlogComponent
  // },
  {
    path:'event-details/:id',
    component:BlogDetailsComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
