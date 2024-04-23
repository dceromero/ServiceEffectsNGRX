import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';

export const loadUser = createAction('[Usuarios] loadUser');

export const loadUserSuccess = createAction('[Usuarios] loadUserSuccess', 
    props<{ usuarios: UsuarioModel[] }>()
);

export const loadUserError = createAction('[Usuarios] loadUserError', 
    props<{ payload: any }>()
);
