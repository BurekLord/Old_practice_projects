import { AuthService } from '../../auth/auth.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}
  storeRecipes() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error: Response) => {
        console.log(error);
      }
    );
  }
  fetchRecipes() {
    this.dataStorageService.fetchRecipes();
  }
  onLogOut() {
    this.authService.logout();
  }
}
