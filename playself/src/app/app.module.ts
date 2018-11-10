import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsermainComponent } from './components/usermain/usermain.component';
import { AppRoutingModule } from './routers/app-routing/app-routing.module';
import { SelfTagComponent } from './components/self-tag/self-tag.component';
import { FollowingPanelComponent } from './components/following-panel/following-panel.component';
import { PreferenceSettingComponent } from './components/preference-setting/preference-setting.component';
import { TagComponent } from './components/tag/tag.component';
import { AdminComponent } from './components/admin/admin.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, UsermainComponent, SelfTagComponent, FollowingPanelComponent, PreferenceSettingComponent, TagComponent, AdminComponent, SuggestionComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
