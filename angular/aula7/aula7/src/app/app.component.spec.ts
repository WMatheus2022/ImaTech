import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Pessoa } from './Pessoa';

describe('AppComponent', () => {
  //inicialização
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // Validar a variável texto
  it('Validar variável de texto', () => {

    // Fixture
    const fixture = TestBed.createComponent(AppComponent);

    //Obter as variáveis a funções do componente
    const componente = fixture.componentInstance;

    // Validação
    expect(componente.texto).toEqual('Aprendendo a trabalhar com jasmine e o Karma');
  });

  it('Validar variável de soma', () =>{

    //Fixture
    const fixture = TestBed.createComponent(AppComponent);

    //Obter as variáveis da função do componente
    const componente = fixture.componentInstance;

    //Executar função e obter o retorno
    let retorno = componente.soma(8, 5);

    //Validar
    expect(typeof retorno).toBe('number');
  });

  // Validar o retorno da função retornarPessoa
  it('Função retorno pessoa', () => {

    //Fixture
    const fixture = TestBed.createComponent(AppComponent);

    //Obter as variáveis e função retornar Pessoa
    const  componente = fixture.componentInstance;

    // Criar um objeto do tipo Pessoa
    const obj = new Pessoa('Ralf', 33);

    // Executar função
    const retorno = componente.retornarPessoa(obj);

    //Validar 
    expect(retorno instanceof Pessoa).toBeTrue();
  })
});
