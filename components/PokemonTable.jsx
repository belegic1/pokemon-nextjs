import store from "../src/store"
import { observer } from "mobx-react"

import PokemonRow from "./PokemonRow";

function PokemonTable() {
  
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {store.filteredPokemon
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onClick={(pokemon) =>
                store.setSelectedPokemon(pokemon)
}
            />
          ))}
      </tbody>
    </table>
  );
}
export default observer(PokemonTable)
