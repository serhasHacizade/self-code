import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IndexService } from '../../../services/index.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  data: any;
  hoveredIndex: number | null = null;
  @ViewChild('#hover-container')
  hoverContainer!: ElementRef;

  constructor(private httpService: IndexService) {}

  ngOnInit() {
    this.httpService.getNavigation().subscribe((response) => {
      this.data = response;
    });
  }

  onMouseOver(index: number) {
    this.hoveredIndex = index;
    this.hoverContainer.nativeElement.style.display = "block"
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }
}
