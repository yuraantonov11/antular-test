import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HexagonMapComponent } from './hexagon-map.component';

@NgModule({
  declarations: [HexagonMapComponent],
  imports: [CommonModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  exports: [HexagonMapComponent]
})
export class HexagonMapModule {}
