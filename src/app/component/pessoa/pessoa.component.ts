import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadavg } from 'os';
import { Pessoa } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/service/pessoa.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
// tslint:disable-next-line: no-inferrable-types
titulo: string = 'Pessoas';
pessoaList: Pessoa[] = [];


// tslint:disable-next-line: typedef
load(){
this._service.listar().subscribe( pessoas => this.pessoaList = pessoas);
}

// tslint:disable-next-line: typedef
showEdit( pessoa: Pessoa ){
  this._router.navigateByUrl(`/pessoa/form/${pessoa.id}`);
}

// tslint:disable-next-line: curly
// tslint:disable-next-line: typedef
delete( id: number) {
  if (confirm('Deseja realmente apagar o registro?')) {
  this._service.deletar(id).subscribe( result => this.load());
  alert('Registro excluído com sucesso');
  }
}

  // tslint:disable-next-line: variable-name
  constructor( private _service: PessoaService,
               // tslint:disable-next-line: variable-name
               private _router: Router ) {

  }

  ngOnInit(): void {

    this.load();

    // tslint:disable-next-line: semicolon

    /*this.pessoaList.push(
      { id: 1, nome: 'Maria', cpf: '987.132.465-09' },
      { id: 2, nome: 'João', cpf: '111.222.333-45' },
      { id: 3, nome: 'Camila', cpf: '545.544.351-44' },
      {id: 4, nome: 'Joaquim', cpf: '124.173.546-83'},
    );*/
  }
}
