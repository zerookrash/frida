import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../services/message.service";

import swal from "sweetalert";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"]
})
export class ContactoComponent implements OnInit {
  

  constructor(public _MessageService: MessageService) {}

  ngOnInit() {}


  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      swal("Formulario de Contacto", "Mensaje enviado correctamente", "success");
    });
  }
  
}