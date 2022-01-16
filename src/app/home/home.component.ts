import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../Services/indicadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public indicadores: any = [];
  public errorService: boolean = false;
  public loadingService: boolean = true;
  
  constructor(
    private indicators: IndicadoresService,
    private route: Router
  ) { }

  ngOnInit(){

    this.getAll();

  }

  private getAll(){
    this.indicators.getAllIndicator().subscribe((data) => {
      if(data){
        this.loadingService = false;
      }
      this.indicadores = data;
    }, err=> this.errorService = true);
  };

  public goTo(code: string){
    this.route.navigate(['detalle', {code: code}]);
  }

}