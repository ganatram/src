import { CheckOut } from './checkOut.component';
import { RouterModule } from '@angular/router';
import { CartDetail } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
import { ModelModule } from './../model/model.module';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
  declarations: [StoreComponent, CartSummaryComponent, CartDetail, CheckOut], // 'Private to this Angular module' -- 'register & load' this component
  exports: [StoreComponent, CartDetail, CheckOut], // 'sharable to other Angular modules'
})
export class StoreModule {}
