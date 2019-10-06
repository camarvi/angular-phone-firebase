import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTelefonosComponent } from './listado-telefonos.component';

describe('ListadoTelefonosComponent', () => {
  let component: ListadoTelefonosComponent;
  let fixture: ComponentFixture<ListadoTelefonosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoTelefonosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTelefonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
