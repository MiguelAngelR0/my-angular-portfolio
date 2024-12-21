import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', component: ContactsComponent } // Ajusta esto según tu configuración
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }