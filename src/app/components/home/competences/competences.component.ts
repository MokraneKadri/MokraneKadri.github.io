import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from 'src/app/services/analytics/analytics.service';

@Component({
    selector: 'app-competences',
    templateUrl: './competences.component.html',
    styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {

    active = 0;

    constructor(public analyticsService: AnalyticsService) {
    }

    ngOnInit(): void {
    }


    openInNewTab(formation: any): void {
        window.open(formation.Link, '_blank');
    }
}
