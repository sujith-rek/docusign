import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmojiListComponent } from './emoji-list/emoji-list.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'emoji', component: EmojiListComponent
  },
  {
    path: '**', component: AppComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
