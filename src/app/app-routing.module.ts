import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";

const routes: Routes = [
  { path: '', redirectTo: 'project-list', pathMatch: 'full' },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'project-detail', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
