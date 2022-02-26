import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { Image2code64Service } from '../../services/image2code64.service';

@Component({
  selector: 'image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ImageUploaderComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ImageUploaderComponent,
    },
  ],
})
export class ImageUploaderComponent
  implements ControlValueAccessor, Validators
{
  @Input()
  requiredFileType!: string;

  @Output()
  image64Encoded: EventEmitter<string> = new EventEmitter();

  imageName!: string;
  onChange = (imageName: string) => {};
  onTouched = () => {};
  disabled: boolean = false;
  fileUploadSuccess: boolean = false;
  fileUploadError = false;
  onValidatorChange = () => {};
  base64Image!: string;

  constructor(private imageEncoder: Image2code64Service) {}

  writeValue(value: any): void {
    this.imageName = value;
    this.base64Image = value;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null | undefined {    
    if (this.fileUploadSuccess) {
      return null;
    }
    let errors: any = {
      requiredFileType: this.requiredFileType,
    };
    if (this.fileUploadError) {
      errors.uploadFailed = true;
    }    
    return errors;
  }

  onClick(imageUploader: HTMLInputElement) {
    this.onTouched();
    imageUploader.click();
  }

  onFileSelectedHdl(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.imageName = file.name;
      this.imageEncoder.img64Encoder(file).subscribe((imgCoded) => {
        this.base64Image = imgCoded;        
        this.image64Encoded.emit(this.base64Image);
      });
      this.fileUploadSuccess = true;
      this.onChange(this.imageName);      
      this.onValidatorChange();
    }
  }
}
