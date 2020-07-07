import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  content$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.content$ = this.store.pipe(
      select(store => store),
      map((res: Store) => {
        console.log('%c store editor', 'color: red',res)
        return (res as any).filesStore.currentFileToShowInEditor
      }),
    );
    console.log('content$ ::', this.content$);
  }

  userTyping(typing) {
    console.log('%c typing', 'color: red', typing)
    // https://netbasal.com/connect-angular-forms-to-ngrx-store-c495d17e129
  }
}
