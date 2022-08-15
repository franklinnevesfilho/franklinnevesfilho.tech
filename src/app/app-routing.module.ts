import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ThankYouComponent } from './contact-form/thank-you/thank-you.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'resume', component: ResumeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact-me', component: ContactFormComponent},
  {path: 'thank-you', component: ThankYouComponent},
  
  // method not found
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ResumeComponent, AboutMeComponent, ProjectsComponent]