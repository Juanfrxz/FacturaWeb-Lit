// src/components/invoice-header.js
import { LitElement, html} from 'lit';
import { generateInvoiceNumber } from '../utils/invoice-generator.js';

export class InvoiceHeader extends LitElement {
  static properties = {
    invoiceNumber: { type: String },
  };

  constructor() {
    super();
    this.invoiceNumber = generateInvoiceNumber();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="card mb-4">
        <div class="card-header bg-primary text-white">
          <h2 class="card-title mb-0">Factura #${this.invoiceNumber}</h2>
        </div>
        <div class="card-body">
          <form>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Número de Documento</label>
                <input type="text" class="form-control" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Nombre</label>
                <input type="text" class="form-control" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Apellidos</label>
                <input type="text" class="form-control" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Dirección</label>
                <input type="text" class="form-control" required>
              </div>
              <div class="col-md-12">
                <label class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" required>
              </div>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

customElements.define('invoice-header', InvoiceHeader);