import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChartModule } from 'primeng/chart';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-grupos',
    standalone: true,
    imports: [CommonModule, ButtonModule, CardModule, ProgressBarModule, ChartModule],
    templateUrl: './grupos.component.html',
    styleUrl: './grupos.component.css',
})
export class GruposComponent implements OnInit {
    isLoggedIn = false;

    groupTotal = 42;
    groupProgress = 75;

    chartData: any;
    chartOptions: any;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.initChart();
    }

    initChart(): void {
        this.chartData = {
            labels: ['Activos', 'Inactivos', 'Pendientes'],
            datasets: [
                {
                    data: [55, 25, 20],
                    backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
                    hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
                },
            ],
        };

        this.chartOptions = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { size: 11 } },
                },
            },
        };
    }
}
