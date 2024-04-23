import { Component, OnInit, inject } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent implements OnInit {

  private store: Store<AppState> = inject(Store);


  public usuarios: UsuarioModel[] = [];
  loading: boolean = false;
  error:any;

  ngOnInit(): void {
    this.store.dispatch(actions.loadUser());
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });
  }


}
