import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'', redirectTo: 'entrar', pathMatch: 'full'},

  {path: 'entrar', component: LoginComponent},
  {path: 'cadastrar', component:CadastrarComponent},

  {path: 'inicio', component: InicioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
