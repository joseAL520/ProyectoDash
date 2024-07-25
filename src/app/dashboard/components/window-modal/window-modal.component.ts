import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InfoModal } from '../../interfaces/infoModal.interfaces';

@Component({
  selector: 'app-window-modal',
  templateUrl: './window-modal.component.html',
  styleUrl: './window-modal.component.css'
})
export class WindowModalComponent {
  @Output() 
  public closeModal: EventEmitter<void> = new EventEmitter();

  @Input()
  public infoForModal:InfoModal[]=[];


  close() {
    this.closeModal.emit();
  }


}
