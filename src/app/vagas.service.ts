import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vagas } from './Vagas.model';


@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/Vagas";

  constructor(private _httpClient: HttpClient) { }

  getVagas(): Observable<Vagas[]> {
      return this._httpClient.get<Vagas[]>(this.url)
  }
  cadastrarVagas(vaga: Vagas): Observable<Vagas[]> {
    return this._httpClient.post<Vagas[]>(this.url,vaga)
}

  atualizarVagas(id:any,vaga: Vagas): Observable<Vagas[]> {
    const urlAtualizar = '$this.url/$id';
    return this._httpClient.put<Vagas[]>(urlAtualizar,vaga)
}

  excluirVagas(id:any): Observable<Vagas[]> {
    const urlDeletar = '$this.url/$id';
    return this._httpClient.delete<Vagas[]>(urlDeletar)
  }

}
