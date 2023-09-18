import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { RandomCommerce } from '../../rancom-commerces.model';

@Component({
  standalone: true,
  selector: 'app-random-commerces-list',
  templateUrl: './random-commerces-list.component.html',
  styleUrls: ['./random-commerces-list.component.scss'],
  imports: [MatTableModule, CommonModule],
})
export class RandomCommercesListComponent {
  @Input() commerces: RandomCommerce[] = [];

  columns = [
    {
      displayName: 'ID',
      columnDef: 'id',
    },
    {
      displayName: 'UID',
      columnDef: 'uid',
    },
    {
      displayName: 'IBAN',
      columnDef: 'iban',
    },
    {
      displayName: 'Account number',
      columnDef: 'account_number',
    },
    {
      displayName: 'Bank name',
      columnDef: 'bank_name',
    },
    {
      displayName: 'Routing number',
      columnDef: 'routing_number',
    },
    {
      displayName: 'Swift BIC',
      columnDef: 'swift_bic',
    },
  ];

  columnsToDisplay = this.columns.map(({columnDef}) => columnDef)

}
