import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FolderSearchComponent} from './folder-search/folder-search.component';
import {UiDesignComponent} from './ui-design/ui-design.component';

const routes: Routes = [
  { path: 'home', component: UiDesignComponent },
  { path: 'foldersearch/:type', component: FolderSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
