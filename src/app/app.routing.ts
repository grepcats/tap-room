import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListKegComponent } from './list-keg/list-keg.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListKegComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
