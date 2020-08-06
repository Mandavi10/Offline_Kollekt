import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecoveryComponent } from './all-recovery.component';
import { AllRecoveryRoutingModule } from './all-recovery-routing.module';


@NgModule({
  declarations: [AllRecoveryComponent],
  imports: [
    CommonModule,
    AllRecoveryRoutingModule
  ]
})
export class AllRecoveryModule { }
