import { ProductRepository } from './../model/product.repository';
import { Product } from './../model/product.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-editor',
  templateUrl: 'productEditor.component.html',
  standalone: false,
})
export class ProductEditorComponent {
  editing: boolean = false;
  id: number = 0;
  product: Product = new Product(); // state change.

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit'; // false
    this.id = activeRoute.snapshot.params['id'];

    if (this.editing) {
      Object.assign(this.product, repository.getProduct(this.id));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('admin/main/products');

    //
  }
}
