import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapFacebook,
  bootstrapInstagram,
  bootstrapTwitterX,
  bootstrapYoutube,
} from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      bootstrapFacebook,
      bootstrapInstagram,
      bootstrapTwitterX,
      bootstrapYoutube,
    }),
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
