import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagesListComponent } from './collages-list.component';

describe('CollagesListComponent', () => {
  let component: CollagesListComponent;
  let fixture: ComponentFixture<CollagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollagesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
