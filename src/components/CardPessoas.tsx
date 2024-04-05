import { Pessoas } from '../models/pessoas.model';
import { CardStyled } from './CardStyled';

interface PessoasProps {
  pessoas: Pessoas;
}

export const CardPessoas = (props: PessoasProps) => {
  return (
    <CardStyled>
      <div>
        <img src={props.pessoas.avatar} alt="" />
      </div>
      <div>
        <p>Nome: {props.pessoas.name} </p>
        <p>id:{props.pessoas.id}</p>
        <p>Telefone:{props.pessoas.phone}</p>
      </div>
    </CardStyled>
  );
};
