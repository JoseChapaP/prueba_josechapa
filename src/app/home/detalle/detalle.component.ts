import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IndicadoresService } from '../../Services/indicadores.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  public code: string = '';
  public indicator: any;
  public indicatorMeasure: string = '';
  public errorService: boolean = false;
  public loadingService: boolean = true;

  constructor(
    private indicators: IndicadoresService,
    private activatedRoute: ActivatedRoute
  ) { 

    this.activatedRoute.params.subscribe( params => {
      this.code = params.code;
    });

  }

  ngOnInit(): void {

    this.getDetail(this.code);

  }

  private getDetail(codeParams: string){
    this.indicators.getIndicator(codeParams).subscribe((data) => {
      if(data){
        this.loadingService = false;
      }
      this.indicator = data;
      this.indicatorMeasure = this.setMeasure(this.indicator.unidad_medida);
      console.log(this.indicator);
    }, err=> this.errorService = true)
  }

  public setMeasure(measure: string){
    let tempMeasure: string = '';
    switch (measure){
      case 'Dólar':
        tempMeasure = "USD$";
         break;
      case 'Pesos':
        tempMeasure = "$";
        break;
      case 'Porcentaje':
        tempMeasure =  "%";
        break;
      default:
        tempMeasure = '';
        break
    }
    return tempMeasure;
  }

}
