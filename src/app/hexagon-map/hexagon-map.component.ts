import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import proj4 from 'proj4';

@Component({
  selector: 'app-hexagon-map',
  templateUrl: './hexagon-map.component.html',
  styleUrls: ['./hexagon-map.component.css']
})
export class HexagonMapComponent implements OnInit {
  private data: any;
  private map!: google.maps.Map;
  private mapInitialized = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('data.json').subscribe(data => {
      this.data = data;
      if (!this.mapInitialized) {
        this.initMap();
        this.mapInitialized = true;
      }
      this.addPolygons();
    });
  }

  private initMap(): void {
    if (this.mapInitialized) return;
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 0, lng: 0 },
      zoom: 2
    });
  }

  private addPolygons(): void {
    if (!this.data?.features?.length) {
      console.error('Invalid data structure:', this.data);
      return;
    }

    this.data.features.forEach((feature: any) => {
      const color = `#${feature.properties.COLOR_HEX}`;
      feature.geometry.coordinates.forEach((polygon: any) => {
        const paths = polygon.map((ring: any) =>
          ring.map((coord: [number, number]) => {
            const [lng, lat] = proj4('EPSG:3857', 'EPSG:4326', coord);
            return { lat, lng };
          })
        );
        new google.maps.Polygon({
          paths,
          strokeColor: color,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: color,
          fillOpacity: 0.35,
          map: this.map
        });
      });
    });
  }
}
