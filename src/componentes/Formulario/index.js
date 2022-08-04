import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem, 
      time
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto 
          obrigatorio={true} 
          label="nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />

        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />

        <CampoTexto
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterando={valor => setImagem(valor)}
        />

        <ListaSuspensa 
          obrigatorio={true} 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />

        <Botao>
          Criar card
        </Botao>

      </form>
    </section>
  )
}

export default Formulario