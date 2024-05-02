import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaCasaComponent } from './planta-casa.component';

describe('PlantaCasaComponent', () => {
  let component: PlantaCasaComponent;
  let fixture: ComponentFixture<PlantaCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantaCasaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
