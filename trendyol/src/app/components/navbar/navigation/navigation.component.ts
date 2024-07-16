import { Component } from '@angular/core';
import { IndexService } from '../../../services/index.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  data: any;

  constructor(private httpService: IndexService) {}

  ngOnInit() {
    this.httpService.getNavigation().subscribe((response) => {
      this.data = response;
    });    
  }  
}
