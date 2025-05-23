import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popupLoaiBanAn',
  templateUrl: './popupLoaiBanAn.component.html',
  styleUrls: ['./popupLoaiBanAn.component.scss']
})
export class PopupLoaiBanAnComponent {
  @Input() formData = {
    tenLoai: '',
    moTa: '',
  };

  @Input() isEditMode: boolean = false; // Biến kiểm tra xem là thêm hay sửa
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  constructor() {}

  // Hàm xử lý khi nhấn "Lưu"
  onSave(): void {
    this.save.emit(this.formData); 
  }

  // Hàm xử lý khi nhấn "Hủy"
  onCancel(): void {
   this.close.emit();
  }
}
