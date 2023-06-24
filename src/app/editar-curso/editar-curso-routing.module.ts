import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCursoPage } from './editar-curso.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCursoPageRoutingModule {}
