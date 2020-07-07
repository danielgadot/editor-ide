import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActionsComponent } from './actions-toolbar/actions.component';
import { TreeComponent } from './tree/tree.component';
import { EditorComponent } from './editor/editor.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { filesReducer } from './store/reducers/files.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActionsComponent,
    TreeComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreModule.forRoot({ filesStore: filesReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
