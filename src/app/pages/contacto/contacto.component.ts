import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"]
})
export class ContactoComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    msn: new FormControl(null)
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.contactForm.value);
  }
}