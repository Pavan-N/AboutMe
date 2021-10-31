import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AchievementsComponent} from "./achievements/achievements.component";
import {EducationalQualificationComponent} from "./educational-qualification/educational-qualification.component";
import {HomeComponent} from "./home/home.component";
import {PersonalDetailsComponent} from "./personal-details/personal-details.component";
import {ProfessionalExperienceComponent} from "./professional-experience/professional-experience.component";
import {TechnicalExpertiseComponent} from "./technical-expertise/technical-expertise.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ProfessionalExperienceComponent },
  { path: 'technical', component: TechnicalExpertiseComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'qualification', component: EducationalQualificationComponent },
  { path: 'personal', component: PersonalDetailsComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
