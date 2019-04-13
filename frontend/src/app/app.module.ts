import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoticeListComponent} from './pages/notice/notice-list/notice-list.component';
import {NoticeFormComponent} from './pages/notice/notice-form/notice-form.component';
import {ListComponent} from './components/list/list.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NoticeListComponent,
    NoticeFormComponent,
    ListComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
