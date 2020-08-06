import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecoveryComponent } from './all-recovery.component';

const routes: Routes = [{path:'',component:AllRecoveryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllRecoveryRoutingModule { }
