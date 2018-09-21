import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReferencesComponent } from './page-references.component';

describe('PageReferencesComponent', () => {
  let component: PageReferencesComponent;
  let fixture: ComponentFixture<PageReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
