import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SerService } from '../../shared/services/ser.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private router: Router, private service: SerService) {}

  onSubmit() {
    if (
      this.formData.name.trim() === '' ||
      this.formData.email.trim() === '' ||
      this.formData.subject.trim() === '' ||
      this.formData.message.trim() === ''
    ) {
      alert('Please fill all fields!');
      return;
    }

    this.service.addContactMessage(this.formData).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
