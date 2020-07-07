import { createReducer, on, Action } from '@ngrx/store';
import { addFile, addFolder, userSelectedFile, userTypesInEditor } from '../actions/files.actions';

interface File {
  name: string;
  content: string;
}

export interface State {
  files: File[];
  currentFileToShowInEditor: string | undefined;
}

export const initialState: State = {
  files: [{
    name: 'first file',
    content: 'some initial content'
  }],
  currentFileToShowInEditor: 'asd'
};

const _filesReducer = createReducer(
    initialState,
    on(addFile, (state, payload) => ({ ...state, files: addFileToReducer(state, payload) })),
    on(addFolder, (state, payload) => ({ ...state, files: addFolderToReducer(state, payload) })),
    on(userSelectedFile, (state, payload) => ({ ...state, currentFileToShowInEditor: userSelectedFileReducer(state, payload) })),
    on(userTypesInEditor, (state, payload) => ({ ...state, currentFileToShowInEditor: userTypesInEditorReducer(state, payload) })),
);

export function filesReducer(state: State | undefined, action: Action) {

  return _filesReducer(state, action);
}


function addFileToReducer(state, payload) {
  console.log('payload', payload)
  let newFiles = Object.assign([], state.files);
  newFiles.push({name: payload.file})
  return newFiles;
}

function addFolderToReducer(state, payload) {
  let newFiles = Object.assign([], state.files);
  newFiles.push({name: payload.folder})
  return newFiles;
}

function userSelectedFileReducer(state, payload) {
  console.log('%c payload', 'color: red', payload)
  return payload.content;
}

function userTypesInEditorReducer(state, payload) {
  console.log('%c payload in userTypesInEditorReducer', 'color: red', payload)
  return payload.content;
}
