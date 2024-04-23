import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { UsuarioModel } from '../../models/usuario.model';

export interface UsuariosState {
    users: UsuarioModel[],
    loaded: boolean,
    loading: boolean,
    error: any
}

const userUsersInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export const usuariosReducer = createReducer(userUsersInitialState,

    on(actions.loadUser, (state) => loadUser(state)),

    on(actions.loadUserSuccess, (state, { usuarios }) => loadUserSuccess(state, usuarios)),

    on(actions.loadUserError, (state, { payload }) => loadUserError(state, payload))
);


function loadUser(state: UsuariosState) {
    return { ...state, loading: true }
}

function loadUserSuccess(state: UsuariosState, usuarios: UsuarioModel[]) {
    return { ...state, loading: false, loaded: true, users: [...usuarios] }
}   

function loadUserError(state: UsuariosState, payload: any) {
    return { ...state, loading: false, loaded: false, error: payload }
}   