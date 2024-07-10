import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { TopListComponent } from './top-list/top-list.component';
import { HeaderComponent } from './header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroMagnifyingGlass,
  heroUser,
  heroHeart,
  heroShoppingCart,
} from '@ng-icons/heroicons/outline';
import {
  heroUserSolid,
  heroHeartSolid,
  heroShoppingCartSolid,
} from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [NavbarComponent, TopListComponent, HeaderComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroMagnifyingGlass,
      heroUser,
      heroHeart,
      heroShoppingCart,
      heroUserSolid,
      heroHeartSolid,
      heroShoppingCartSolid,
    }),
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
