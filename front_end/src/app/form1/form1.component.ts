import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form1',
  imports: [FormsModule],
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  nome: string = '';
  email: string = '';
  mensagem: string = '';

  constructor(private router: Router, private dataService: DataService) { }
  
  onSubmit() {
    console.log("Dados Enviados");
    const data = { nome: this.nome, email: this.email, mensagem: this.mensagem };
    this.dataService.setDados(data);
    console.log(this.dataService.getDados());
    this.router.navigate(['/form2']);
    
  }  

  

  // navigateToForm2() {
    
        
  // }
  
}