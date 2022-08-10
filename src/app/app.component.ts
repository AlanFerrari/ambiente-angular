import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cont = 0;
  text = '';

  pessoas = [
    {
      nome: 'Alan',
      sobrenome: 'Ferrari'
    },
    {
      nome: 'Maria',
      sobrenome: 'José'
    },
    {
      nome: 'Pamela',
      sobrenome: 'Nascimento'
    },
    {
      nome: 'Marcio',
      sobrenome: 'Donato'
    }
  ];

  constructor(){

  }

  ngOnInit(): void {
    let intervalo = setInterval(() => {
      this.cont++;
      if (this.cont === 10) {
        clearInterval(intervalo);
      }
    }, 1000)
  }

  clicou(nome: string): void {
    console.log('Clicou em mim', nome)
  }
}
