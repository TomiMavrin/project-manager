import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColumnDialogComponent } from './create-column-dialog.component';

describe('CreateColumnDialogComponent', () => {
  let component: CreateColumnDialogComponent;
  let fixture: ComponentFixture<CreateColumnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateColumnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateColumnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
