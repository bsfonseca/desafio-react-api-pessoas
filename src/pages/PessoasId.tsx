import { useEffect, useState } from 'react';
import { Pessoas } from '../models/pessoas.model';
import axios from 'axios';
import { CardPessoas } from '../components/CardPessoas';

export const PessoasId = () => {
  const [pessoas, setPessoas] = useState<Pessoas[]>([]);
  const [pessoasFiltradas, setPessoasFiltradas] = useState<Pessoas[]>([]);

  const listarApi = async () => {
    const result = await axios.get(`https://6495dc81b08e17c91792c92d.mockapi.io/api/v1/people`);
    console.log(result.data);
    setPessoas(result.data);
    setPessoasFiltradas(result.data);
  };

  useEffect(() => {
    listarApi();
  }, []);

  const pesquisaNome = async (event: any) => {
    event.preventDefault();

    const name = event.target.name.value;
    const id = event.target.id.value;

    setPessoasFiltradas(pessoas);
    let listaFiltrada = [...pessoas];

    if (name !== '') {
      listaFiltrada = listaFiltrada.filter(item => item.name == name);
    }

    if (id !== '') {
      listaFiltrada = listaFiltrada.filter(item => item.id == id);
    }

    setPessoasFiltradas(listaFiltrada);
  };

  return (
    <div>
      <form onSubmit={pesquisaNome}>
        <div>
          <label>Digite o nome</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Digite o ID</label>
          <input type="text" name="id" />
        </div>
        <div>
          <button>Pesquisar</button>
        </div>
      </form>
      <div>
        <h1>Listagem de pessoas</h1>
        {pessoasFiltradas.map(item => (
          <CardPessoas pessoas={item} />
        ))}
      </div>
    </div>
  );
};
