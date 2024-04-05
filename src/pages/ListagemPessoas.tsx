import { useEffect, useState } from 'react';
import { Pessoas } from '../models/pessoas.model';
import axios from 'axios';
import { CardPessoas } from '../components/CardPessoas';

export const ListagemPessoas = () => {
  const [pessoas, setPessoas] = useState<Pessoas[]>([]);

  const listarApi = async () => {
    const result = await axios.get(`https://6495dc81b08e17c91792c92d.mockapi.io/api/v1/people`);
    console.log(result.data);
    setPessoas(result.data);
  };

  useEffect(() => {
    listarApi();
  }, []);

  return (
    <div>
      <h1>Listagem de Pessoas</h1>
      {pessoas.map(item => (
        <CardPessoas pessoas={item} />
      ))}
    </div>
  );
};
