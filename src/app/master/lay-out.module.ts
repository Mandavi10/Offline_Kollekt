import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent} from '../main-layout/main-layout.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { LayOutRoutingModule } from './lay-out-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import{NorightclickModule}from '../Services/norightclick.module';
import { AllRecoveryComponent } from './all-recovery/all-recovery.component';





@NgModule({
  declarations: [MainLayoutComponent,HeaderComponent,SidebarComponent,FooterComponent, AllRecoveryComponent],
  imports: [
    CommonModule,
    LayOutRoutingModule,
    AgGridModule.withComponents([]),
    NorightclickModule
  ]
})
export class LayOutModule { }
