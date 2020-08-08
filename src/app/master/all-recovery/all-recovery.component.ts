import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-all-recovery',
  templateUrl: './all-recovery.component.html',
  styleUrls: ['./all-recovery.component.css']
})
export class AllRecoveryComponent implements OnInit {
  columnDefs = [
    {headerName: 'Sr. No.', field: 'srNo', width:'80'},
    {headerName: 'Mandate ID', field: 'mandateid', width:'150'},
    {headerName: 'Reference ID', field: 'refernceid', width:'150'},
    {headerName: 'Amount', field: 'amount', width:'110', headerClass:'price', cellClass: 'price' },
   
    
];

rowData = [
    {  srNo: '1', mandateid:'ID-000238463',  refernceid: 'Ref_887643t73', amount: '3000.00'},
    {  srNo: '2', mandateid:'ID-000238463',  refernceid: 'Ref_887643t73', amount: '3000.00'},
    {  srNo: '3', mandateid:'ID-000238463',  refernceid: 'Ref_887643t73', amount: '3000.00'}
];




  showModalstatemaster: boolean;

  onClickstatemaster(event) {
    this.showModalstatemaster = true;
    
    }
    
    hidestatemaster() {
    this.showModalstatemaster = false;
    }


  constructor() { }

  ngOnInit(): void {
  }

}
