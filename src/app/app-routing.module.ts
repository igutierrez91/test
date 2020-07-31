import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateComponent } from './pages/update/update.component';
import { ErrorComponent } from './pages/error/error.component';
import { AppComponent } from './app.component';
import { ConnectingComponent } from './pages/connecting/connecting.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'init/:token', component: AppComponent },
  { path: 'connecting', component: ConnectingComponent },
  { path: 'update-success', component: ConnectingComponent },
  { path: 'register-success', component: ConnectingComponent },
  { path: 'error-success', component: ConnectingComponent },
  { path: '', component: RootComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
