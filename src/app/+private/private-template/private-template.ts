import { Component, inject } from '@angular/core';
import { Router,RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-private-template',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './private-template.html',
  styleUrl: './private-template.scss',
})
export class PrivateTemplate {
  router=inject(Router)
  logof() {
    sessionStorage.clear();
    localStorage.removeItem('auth-token');
    this.router.navigateByUrl('/login')
  }
}
