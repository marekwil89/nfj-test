import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NoticeListComponent} from './pages/notice/notice-list/notice-list.component';
import {NoticeFormComponent} from './pages/notice/notice-form/notice-form.component';

const routes: Routes = [
  {path: '' , redirectTo: '/notice-form' , pathMatch: 'full'},
  {path: 'notice-list', component: NoticeListComponent},
  {path: 'notice-form', component: NoticeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
