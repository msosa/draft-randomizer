import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftHomeComponent } from './draft-home.component';

describe('DraftHomeComponent', () => {
  let component: DraftHomeComponent;
  let fixture: ComponentFixture<DraftHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
