// src/main.js
import { LitElement, html} from 'lit';
import './src/components/invoice-header.js';
import './src/components/product-selector.js';

class InvoiceApp extends LitElement {
    static properties = {
      products: { type: Array }
    };
  
    constructor() {
      super();
      this.products = [];
    }
  
    createRenderRoot() {
      return this;
    }
  
    addProduct() {
      const productSelector = document.querySelector('product-selector');
      if (productSelector.selectedProduct) {
        const newProduct = {
          code: productSelector.selectedProduct.code,
          name: productSelector.selectedProduct.name,
          quantity: productSelector.quantity,
          unitPrice: productSelector.selectedProduct.unitPrice,
          subtotal: productSelector.selectedProduct.unitPrice * productSelector.quantity
        };
        this.products = [...this.products, newProduct];
      }
    }
  
    calculateTotals() {
      const subtotal = this.products.reduce((sum, product) => sum + product.subtotal, 0);
      const iva = subtotal * 0.19;
      const total = subtotal + iva;
      return { subtotal, iva, total };
    }
  
    render() {
      const totals = this.calculateTotals();
  
      return html`
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <invoice-header></invoice-header>
              
              <product-selector></product-selector>
              
              <div class="text-center mb-3">
                <button 
                  class="btn btn-success" 
                  @click=${this.addProduct}
                >
                  <i class="bi bi-plus-circle me-2"></i>Agregar Producto
                </button>
              </div>
  
              ${this.products.length > 0 ? html`
                <div class="card">
                  <div class="card-header bg-info text-white">
                    Detalle de Productos
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped table-hover">
                        <thead class="table-dark">
                          <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Valor Unitario</th>
                            <th>Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${this.products.map(product => html`
                            <tr>
                              <td>${product.code}</td>
                              <td>${product.name}</td>
                              <td>${product.quantity}</td>
                              <td>$${product.unitPrice.toLocaleString()}</td>
                              <td>$${product.subtotal.toLocaleString()}</td>
                            </tr>
                          `)}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
  
                <div class="card mt-3">
                  <div class="card-body">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td class="fw-bold">Subtotal</td>
                          <td class="text-end">$${totals.subtotal.toLocaleString()}</td>
                        </tr>
                        <tr>
                          <td class="fw-bold">IVA (19%)</td>
                          <td class="text-end">$${totals.iva.toLocaleString()}</td>
                        </tr>
                        <tr class="table-active">
                          <td class="fw-bold">Total</td>
                          <td class="text-end fw-bold">$${totals.total.toLocaleString()}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('invoice-app', InvoiceApp);