import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HexagonMapModule } from './hexagon-map/hexagon-map.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HexagonMapModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
}
