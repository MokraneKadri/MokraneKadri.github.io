import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CompetencesComponent } from "./competences.component";

describe("projectsComponent", () => {
	let component: CompetencesComponent;
	let fixture: ComponentFixture<CompetencesComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [CompetencesComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CompetencesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
