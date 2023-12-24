import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { FormationsComponent } from "./formations.component";

describe("projectsComponent", () => {
	let component: FormationsComponent;
	let fixture: ComponentFixture<FormationsComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [FormationsComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FormationsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
