import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeItemComponent } from './poke-item.component';

describe('PokeItemComponent', () => {
  let component: PokeItemComponent;
  let fixture: ComponentFixture<PokeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
