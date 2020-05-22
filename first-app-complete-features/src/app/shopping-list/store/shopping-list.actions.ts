import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDINT = '[Shopping List] Add Ingredient';
export const ADD_INGREDINTS = '[Shopping List] Add Ingredients';
export const UPDATE_INGREDINT = '[Shopping List] Update Ingredient';
export const DELETE_INGREDINT = '[Shopping List] Delete Ingredient';
export const START_EDIT = '[Shopping List] Start Edit';
export const STOP_EDIT = '[Shopping List] Stop Edit';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDINT;
    constructor(public payload: Ingredient) { }
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDINTS;
    constructor(public payload: Ingredient[]) { }
}

export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDINT;
    constructor(public payload:  Ingredient ) { }
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDINT;
}
export class StartEdit implements Action {
    readonly type = START_EDIT;
    constructor(public payload: number) { }
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}
export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient | StartEdit | StopEdit;