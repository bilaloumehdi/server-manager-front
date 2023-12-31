import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersPageComponent } from './servers-page.component';

describe('ServersPageComponent', () => {
  let component: ServersPageComponent;
  let fixture: ComponentFixture<ServersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
