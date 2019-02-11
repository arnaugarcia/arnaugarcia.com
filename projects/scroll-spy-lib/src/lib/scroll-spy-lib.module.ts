import { NgModule } from '@angular/core';
import { ScrollSpyNavDirective } from './scroll-spy-nav.directive';
import { ScrollSpySectionDirective } from './scroll-spy-section.directive';

@NgModule({
  declarations: [ScrollSpyNavDirective, ScrollSpySectionDirective],
  imports: [],
  exports: [ScrollSpyNavDirective]
})
export class ScrollSpyLibModule { }
