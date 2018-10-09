import { Component, ViewChild } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { ConsumoProvider } from "../../providers/consumo/consumo.service";
import { Chart } from 'chart.js';
import { connectableObservableDescriptor } from "rxjs/observable/ConnectableObservable";

@Component({
    selector: 'page-consumo',
    templateUrl: './consumo.html'
})
export class ConsumoPage {
    filtro: any = {};
    labels: any = [
        '02/10',
        '03/10',
        '04/10',
        '05/10',
        '06/10',
        '07/10'
    ];
    data: any = [
        23.57,
        12.8,
        56.12,
        43,
        12,
        7
    ];

    @ViewChild('graficoBarra') barraEl;
    barChart: any;

    constructor(public navCtrl: NavController, private _service: ConsumoProvider) {

    } 

    ionViewDidLoad() {
        this.criaGraficoDeBarra();
    }

    onSubmit() {
        this._service.getConsumoOf(this.filtro).subscribe((data: any) => {
            console.log(data);
           this.trataDados(data.content);
        }, (res: any) => {
            console.log(res);
        });
    }


    trataDados(dados: any) {
        dados.forEach(obj => {
            this.labels.push(`${obj._id.day}/${obj._id.month}`);
            this.data.push(obj.total.toFixed(2));
        });
        this.criaGraficoDeBarra();
    }

    criaGraficoDeBarra() {
        this.barChart = new Chart(this.barraEl.nativeElement, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [{
                    label: 'Valor em W',
                    data: this.data,
                    backgroundColor:'#0336FF',
                    borderColor: '#0336FF',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}