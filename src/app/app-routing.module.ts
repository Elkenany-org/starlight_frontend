import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductsComponent } from './components/products/products.component';

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
    path:'events',
    component:AboutUsComponent
  },
  {
    path:'blog',
    component:BlogComponent
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
