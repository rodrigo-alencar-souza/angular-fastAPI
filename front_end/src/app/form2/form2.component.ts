import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-form2',
  imports: [FormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  cep: string = '';
  cidade: string = '';
  pais: string = '';
  
  constructor(private router: Router, private dataService: DataService) { }

  onSubmit() {
      console.log("Dados Enviados");
      const data = {cep: this.cep, cidade: this.cidade, pais: this.pais};
      console.log("Dados:", data);
      this.dataService.setDados(data);
    console.log(this.dataService.getDados());
    this.dataService.enviarDados().subscribe(response => {
      console.log("Resposta da API:", response);
      alert("Formulário Preenchido");
    });
      alert("Formulário Preenchido")
      this.router.navigate(['/form1']);
    }  
  
   
  
    // navigateToForm1() {
      
          
    // }
}
