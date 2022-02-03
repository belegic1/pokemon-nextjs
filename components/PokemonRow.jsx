import Button from '@mui/material/Button'
import Link from "next/link"

import PokemonType from "../src/pokemonType";

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr>
      <td><Link href={`/pokemon/${pokemon.id}`}>
        <a>{pokemon.name.english}</a>
      </Link></td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="outlined"
          onClick={() => onClick(pokemon)}
        >
          Info
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;
