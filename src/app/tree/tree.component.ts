import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { addFile, addFolder, userSelectedFile } from '../store/actions/files.actions';
import { filesReducer } from '../store/reducers/files.reducer';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  // @Input() data: {children: Array<any>,name: string,id: number};
  // showChildren: boolean = true;
  data$: Observable<any>;

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.data$ = this.store.pipe(
      select(store => store),
      map((res: Store) => {
        console.log('res :: ', res)
        return (res as any).filesStore.files
      }),
      );
    console.log('$data', this.data$);
  }

  toggleOffices(d) {
    console.log('d ::', d);

  }

  selectFile(file) {
    console.log('file :: ', file)
    this.store.dispatch(userSelectedFile(file));

  }
}


