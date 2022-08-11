import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MakingOfComponent } from './making-of/making-of.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'resume', component: ResumeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'making-of', component: MakingOfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ResumeComponent, AboutMeComponent, ProjectsComponent]