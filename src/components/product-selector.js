// src/components/product-selector.js
import { LitElement, html} from 'lit';
import { productList } from '../utils/invoice-generator.js';

export class ProductSelector extends LitElement {
  static properties = {
    selectedProduct: { type: Object },
    quantity: { type: Number }
  };

  constructor() {
    super();
    this.quantity = 1;
  }

  createRenderRoot() {
    return this;
  }

  handleProductChange(e) {
    const selectedCode = e.target.value;
    this.selectedProduct = productList.find(p => p.code === selectedCode);
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="card mb-3">
        <div class="card-header bg-secondary text-white">
          Selección de Producto
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-3">
              <label class="form-label">Producto</label>
              <select 
                class="form-select" 
                @change=${this.handleProductChange}
              >
                <option value="">Seleccionar Producto</option>
                ${productList.map(product => html`
                  <option value=${product.code}>${product.name}</option>
                `)}
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">Código</label>
              <input 
                type="text" 
                class="form-control" 
                .value=${this.selectedProduct?.code || ''} 
                readonly
              >
            </div>
            <div class="col-md-3">
              <label class="form-label">Valor Unitario</label>
              <input 
                type="text" 
                class="form-control" 
                .value=${this.selectedProduct ? `$${this.selectedProduct.unitPrice.toLocaleString()}` : ''} 
                readonly
              >
            </div>
            <div class="col-md-3">
              <label class="form-label">Cantidad</label>
              <input 
                type="number" 
                class="form-control" 
                .value=${this.quantity} 
                min="1"
                @input=${(e) => this.quantity = parseInt(e.target.value)}
              >
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('product-selector', ProductSelector);