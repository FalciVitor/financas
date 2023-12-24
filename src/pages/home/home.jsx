import React from 'react';
import './home.css';

function NomeDaTela() {
  return (
    <header>
      <span>Nome da tela</span>
    </header>
  );
}

function SeletorDoMes() {
  return (
    <section>
      <label htmlFor="mes">Selecione o mês:</label>
      <select id="mes" name="mes">
        {/* Opções de seleção aqui */}
      </select>
    </section>
  );
}

function NomeDoUsuarioLogado() {
  return (
    <aside>
      <span>Nome do usuário logado</span>
    </aside>
  );
}

//function

function Inicio() {
  return (
    <main className="Inicio">
      <div className="InicioDivSuperior">
        <NomeDaTela />
        <SeletorDoMes />
        <NomeDoUsuarioLogado />
      </div>
      <div className="DivCalculos">
        <h2>Algo vai aqui</h2>
      </div>
      <div className="DivListaGraficos">
        <h2>Algo vai aqui 2</h2>
      </div>
    </main>
  );
}

export default Inicio;
