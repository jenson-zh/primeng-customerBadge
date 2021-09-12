import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customerservice';;
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
        :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
        }

        @media screen and (max-width: 64em) {
            :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
                top: 0px;
            }
        }
  `]
})
export class AppComponent { 
    customers: Customer[];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => this.customers = customers);
    }
}
