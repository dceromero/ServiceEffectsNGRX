
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from '../../services/usuario.service';
import * as actionsUsuario from '../actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UsuarioModel } from '../../models/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class UsuarioEffects {

    private actions$ = inject(Actions);
    private service = inject(UsuarioService);

    loadUsario$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionsUsuario.loadUsuario),
            exhaustMap(
                (action) => this.service.getUsersOne(action.id).pipe(
                    map((users: UsuarioModel) => actionsUsuario.loadUsuarioSuccess({ usuario: users })),
                    catchError((error) => of(actionsUsuario.loadUsuarioError({ payload: error })))
                )
            )
        )
    )
}