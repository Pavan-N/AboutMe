import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EducationalQualificationComponent } from './educational-qualification/educational-qualification.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { TechnicalExpertiseComponent } from './technical-expertise/technical-expertise.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PersonalDetailsComponent,
    EducationalQualificationComponent,
    AchievementsComponent,
    TechnicalExpertiseComponent,
    ProfessionalExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
