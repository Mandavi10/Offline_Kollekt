import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecoveryComponent } from './all-recovery.component';
import { AllRecoveryRoutingModule } from './all-recovery-routing.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [AllRecoveryComponent],
  imports: [
    CommonModule,
    AllRecoveryRoutingModule,
    AgGridModule.withComponents([])
  ]
})

export class AllRecoveryModule { }
