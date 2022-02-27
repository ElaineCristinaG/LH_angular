import { Component, OnInit } from '@angular/core';
import { Vagas } from '../Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vagas = new Vagas(0,"","","",0);
  public vagas: Vagas[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._vagasService.cadastrarVagas(this.vaga).subscribe(
      vaga =>{this.vaga = new Vagas(0,"","","",0)},
      err =>{console.log("Erro ao cadastrar")}
    );
    window.location.href = "/mural";
  }

  atualizar(id:number){
    this._vagasService.atualizarVagas(id,this.vaga).subscribe(
      vaga =>{this.vaga = new Vagas(0,"","","",0)},
      err =>{console.log("Erro ao atualizar")}
    );
    window.location.href = "/mural";
  }

  excluir(id: number){
    this._vagasService.excluirVagas(id).subscribe(
      vaga =>{this.vaga = new Vagas(0,"","","",0)},
      err =>{console.log("Erro ao excluir")}
    );
    window.location.href = "/mural";
  }
 
}