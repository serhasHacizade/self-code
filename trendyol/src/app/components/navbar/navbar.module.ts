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
import { NavigationComponent } from './navigation/navigation.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    TopListComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroMagnifyingGlass,
      heroUser,
      heroHeart,
      heroShoppingCart,
    }),
  ],
  providers: [provideHttpClient(withFetch())],

  exports: [NavbarComponent],
})
export class NavbarModule {}
