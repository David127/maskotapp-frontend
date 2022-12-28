import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'directorio',
    loadChildren: () => import('./modules/directory/directory.module').then(m => m.DirectoryModule)
  },
  {
    path: 'mascotas',
    loadChildren: () => import('./modules/pet/pet.module').then(m => m.PetModule)
  },
  {
    path: 'foros',
    loadChildren: () => import('./modules/forum/forum.module').then(m => m.ForumModule)
  },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('./modules/my-account/my-account.module').then(m => m.MyAccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
