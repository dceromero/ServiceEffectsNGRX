import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUsuario } from '../../store/actions';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: ``
})
export class UsuarioComponent implements OnInit, OnDestroy {  
  private route: ActivatedRoute = inject(ActivatedRoute);
  private subs:Subscription = new Subscription();
  private store:Store<AppState> = inject(Store);

  public user?: UsuarioModel;
  ngOnInit(): void {
    this.subs = this.route.params.subscribe(({ id }) => {
      this.store.dispatch(loadUsuario({ id }));
    });

    this.store.select('usuario').subscribe(({ users }) => {
      this.user = users;
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
