import { createAction, props } from '@ngrx/store';

export const addFile = createAction('[Tree Component] addFile', props<any>());
export const addFolder = createAction('[Tree Component] addFolder', props<any>());
export const userSelectedFile = createAction('[Tree Component] userSelectedFile', props<any>());
export const userTypesInEditor = createAction('[Editor Component] userTypesInEditor', props<any>());
