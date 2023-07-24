import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';


@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  constructor(
    private service : PensamentoService,
    private router: Router)
  {
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

criarPensamento() {
  this.service.criar(this.pensamento).subscribe(() => {
    this.router.navigate(['/listarPensamento'])
  });
}

  pensamento: Pensamento = {
    conteudo:'',
    autoria: '',
    modelo: 'modelo2'
  }
}
