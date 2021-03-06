import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.css'],
})
export class RoutesComponent implements OnInit {

    reittiTaulukko: any;
    lat: number;
    lon: number;

    constructor(private digitransitService: DigitransitService) {
    }

    ngOnInit() {
        this.digitransitService.getRoutes().subscribe(response => {
            console.log(response.data['stops'][0].patterns);
            this.reittiTaulukko = response.data['stops'][0].patterns;
            this.lat = response.data['stops'][0].lat;
            this.lon = response.data['stops'][0].lon;
        });
    }

}
