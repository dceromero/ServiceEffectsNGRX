import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';

export const loadUsuario= createAction('[Usuario] loadUsuario',
    props<{ id: string }>()
);

export const loadUsuarioSuccess = createAction('[Usuario] loadUsuarioSuccess', 
    props<{ usuario: UsuarioModel }>()
);

export const loadUsuarioError = createAction('[Usuario] loadUsuarioError', 
    props<{ payload: any }>()
);
