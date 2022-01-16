import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicadoresService } from '../Services/indicadores.service';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  const fakeIndicadoresService = {
    getAllIndicator() {
      return of('asdasd');
    },
    getIndicator() {
      return of('dsadad');
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule,HttpClientTestingModule ],
      providers:[ , {provide: IndicadoresService, useValue: fakeIndicadoresService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});