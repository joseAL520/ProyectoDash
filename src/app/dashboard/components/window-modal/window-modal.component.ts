import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-window-modal',
  templateUrl: './window-modal.component.html',
  styleUrl: './window-modal.component.css'
})
export class WindowModalComponent {
  @Output() 
  public closeModal: EventEmitter<void> = new EventEmitter();

  close() {
    this.closeModal.emit();
  }


}
