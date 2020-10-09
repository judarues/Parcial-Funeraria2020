import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTarifasComponent } from './view-tarifas.component';

describe('ViewTarifasComponent', () => {
  let component: ViewTarifasComponent;
  let fixture: ComponentFixture<ViewTarifasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTarifasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
