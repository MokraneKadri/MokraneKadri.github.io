import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {AboutComponent} from './about/about.component';
import {BannerComponent} from './banner/banner.component';
import {ContactComponent} from './contact/contact.component';
import {JobsComponent} from './jobs/jobs.component';
import {FormationsComponent} from './formations/formations.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CompetencesComponent} from './competences/competences.component';

// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent,
        AboutComponent,
        JobsComponent,
        FormationsComponent,
        CompetencesComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        NgbNavModule,
        CarouselModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
})
export class HomeModule {
}
