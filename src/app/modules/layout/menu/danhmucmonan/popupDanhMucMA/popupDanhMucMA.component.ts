import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-popupDanhMucMA',
  templateUrl: './popupDanhMucMA.component.html',
  styleUrls: ['./popupDanhMucMA.component.scss']
})
export class PopupDanhMucMAComponent {
  @Input() formData = {
    tenDanhMuc: '',
    moTa: '',
  };
  @Input() isEditMode: boolean = false; // Biến kiểm tra xem là thêm hay sửa
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();
  constructor(
  ) {}

  // Hàm xử lý khi nhấn "Lưu"
  onSave(): void {
    this.save.emit(this.formData); // Đóng popup và trả về dữ liệu
  }

  // Hàm xử lý khi nhấn "Hủy"
  onCancel(): void {
    this.close.emit(); // Đóng popup mà không trả về dữ liệu
  }
}
