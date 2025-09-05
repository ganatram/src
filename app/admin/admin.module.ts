import { ProductEditorComponent } from './productEditor.component';
import { ProductTableComponent } from './productTable.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

let routing = RouterModule.forChild([
  {
    path: 'main',
    component: AdminComponent,
    children: [
      // template  - router tree - utilized by a component - to place a dynamic component in it's template
      {
        path: 'products',
        component: ProductTableComponent,
      },
      {
        path: 'products/:mode/:id', // mode='edit'   & id=1;     -- route params
        component: ProductEditorComponent,
      },
      {
        path: 'products/:mode', //    mode='create'
        component: ProductEditorComponent,
      },
      {
        path: '**',
        redirectTo: 'products',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'main', // default hashbang
  },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AdminComponent, ProductTableComponent, ProductEditorComponent],
})
export class AdminModule {}
