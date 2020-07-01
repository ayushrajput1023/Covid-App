import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveinfoComponent } from './aboveinfo.component';

describe('AboveinfoComponent', () => {
  let component: AboveinfoComponent;
  let fixture: ComponentFixture<AboveinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboveinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
