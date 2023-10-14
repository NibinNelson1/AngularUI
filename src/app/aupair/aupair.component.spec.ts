import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AupairComponent } from './aupair.component';

describe('AupairComponent', () => {
  let component: AupairComponent;
  let fixture: ComponentFixture<AupairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AupairComponent]
    });
    fixture = TestBed.createComponent(AupairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
