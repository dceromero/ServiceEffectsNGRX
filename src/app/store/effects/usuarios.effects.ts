import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from "../actions";
import { catchError, map, exhaustMap, of } from "rxjs";
import { UsuarioService } from "../../services/usuario.service";
import { UsuarioModel } from "../../models/usuario.model";

@Injectable({ providedIn: 'root' })
export class UsuariosEffects {

    //El signo $ significa que es Observable
    private actions$: Actions = inject(Actions);
    private service: UsuarioService = inject(UsuarioService);

    loadUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.loadUser),
            exhaustMap(
                () => this.service.getUsersAll().pipe(
                    map((users: UsuarioModel[]) => usuariosActions.loadUserSuccess({ usuarios: users })),
                    catchError((error) => of(usuariosActions.loadUserError({ payload: error })))
                )
            )
        )
    );
}

