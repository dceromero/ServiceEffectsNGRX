import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  private route:Router = inject(Router)

  onBuscar(id: string) {
    if (!id) return;
    this.route.navigate(['/usuario', id]);
  }

}
