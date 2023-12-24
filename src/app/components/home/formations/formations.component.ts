import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from 'src/app/services/analytics/analytics.service';

@Component({
    selector: 'app-formations',
    templateUrl: './formations.component.html',
    styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {

    active = 0;

    constructor(public analyticsService: AnalyticsService) {
    }

    ngOnInit(): void {
    }


    openInNewTab(formation: any): void {
        window.open(formation.Link, '_blank');
    }
}
