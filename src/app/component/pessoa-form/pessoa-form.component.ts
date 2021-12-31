import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { exception } from 'console';
import { Pessoa } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  titulo: string = 'Cadastro de Pessoas';

  // tslint:disable-next-line: no-inferrable-types
  error: boolean = false;

  // tslint:disable-next-line: no-inferrable-types
  errorMsg: string = '';

  // tslint:disable-next-line: no-inferrable-types
  id: number = 0;

  form = this.formBuilder.group({
    nome: '',
    cpf:  '',
  });

  constructor(private formBuilder: FormBuilder,
              // tslint:disable-next-line: variable-name
              private _service: PessoaService,
              // tslint:disable-next-line: variable-name
              private _router: Router,
              // tslint:disable-next-line: variable-name
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this._route.snapshot.paramMap;
    this.id = Number(param.get('id'));
    // console.log(this.id);

    this._service.obter(this.id)
    .subscribe(pessoa => {
    console.log(pessoa);
    this.form.get('nome')?.setValue(pessoa.nome);
    this.form.get('cpf')?.setValue(pessoa.cpf);
    });

  }


  // tslint:disable-next-line: typedef
  save(){
    // tslint:disable-next-line: no-var-keyword
    var pessoa: Pessoa = this.form.value;
    pessoa.id = this.id;

    // console.log(this.form.value);

    // tslint:disable-next-line: curly
    if ( this.id === 0 )
    this._service.inserir( pessoa /* this.form.value */ ).subscribe(response => {
    this.error = false;
    console.log(response);
    this._router.navigateByUrl('/pessoa');
    }, tException => {
        this.error = true;
        console.log(tException.error.mensagem);
        this.errorMsg = tException.error.mensagem;
    });
    // tslint:disable-next-line: curly
    else
      this._service.atualizar( pessoa /* this.form.value */ ).subscribe(response => {
          this.error = false;
          console.log(response);
          this._router.navigateByUrl('/pessoa');
      }, tException => {
          this.error = true;
          // console.log(tException.error.mensagem);
          this.errorMsg = tException.error.mensagem;
      });

  }

}
