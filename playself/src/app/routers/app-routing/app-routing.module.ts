import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { UsermainComponent } from '../../components/usermain/usermain.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { PreferenceSettingComponent } from '../../components/preference-setting/preference-setting.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  {path: 'personal/:username/page',
  component: UsermainComponent},
  {path: 'personal/:username/page/preferenceSetting',
  component: PreferenceSettingComponent},
  {path: '**',
  component: LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
