import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmojiListComponent } from './emoji-list/emoji-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'emoji'
  },
  {
    path: 'emoji', component: EmojiListComponent
  },
  {
    path: '**', component: EmojiListComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
