import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addFile, addFolder } from '../store/actions/files.actions';

@Component({
  selector: 'actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(private store: Store<{ store: Store }>) { }

  ngOnInit(): void {
  }

  addFolderToStore() {
    console.log('addFolderToStore :: ',);
    const name = prompt('File name')
    this.store.dispatch(addFolder({ folder: name}));
  }

  addFileToStore() {
    const name = prompt('Folder name')
    this.store.dispatch(addFile({ file: name }));
  }

}
