import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { UsuarioModel } from '../../models/usuario.model';

export interface UsuarioState {
    id?: string,
    users?: UsuarioModel,
    loaded: boolean,
    loading: boolean,
    error: any
}

const userUsersInitialState: UsuarioState = {
    id: undefined,
    users: undefined,
    loaded: false,
    loading: false,
    error: null
}

export const usuarioReducer = createReducer(userUsersInitialState,

    on(actions.loadUsuario, (state, { id }) => loadUser(state, id)),

    on(actions.loadUsuarioSuccess, (state, { usuario }) => loadUsuarioSuccess(state, usuario)),

    on(actions.loadUsuarioError, (state, { payload }) => loadUsuarioError(state, payload))
);


function loadUser(state: UsuarioState, id: string) {
    return { ...state, loading: true, id: id }
}

function loadUsuarioSuccess(state: UsuarioState, usuario: UsuarioModel) {
    return { ...state, loading: false, loaded: true, users: { ...usuario } }
}

function loadUsuarioError(state: UsuarioState, payload: any) {
    return { ...state, loading: false, loaded: false, error: payload }
}   