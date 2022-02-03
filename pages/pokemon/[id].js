import styled from "@emotion/styled";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline'
import { withRouter } from "next/router";

import store from "../../src/store";


const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;



export async function getStaticPaths() {
    const allPokemon  = require("../../src/pokemon.json")
    return {
        paths: allPokemon.map((p) => ({
            params: {
                id: p.id.toString(),
            }
        })),
        fallback: false // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    const allPokemon = require("../../src/pokemon.json")
    const pokemon = allPokemon.find(({ id }) => id.toString() === context.params.id)
    return {
        props: {
            pokemon
        }, // will be passed to the page component as props
    }
}

export default withRouter(({pokemon}) => {

    return (
        <PageContainer>
            <CssBaseline />

            <div>
                {pokemon && (
                    <>
                        <h1>{pokemon.name.english}</h1>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Attribute</TableCell>
                                    <TableCell>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(pokemon.base).map(k => (
                                    <TableRow key={k}>
                                        <TableCell>{k}</TableCell>
                                        <TableCell>{pokemon.base[k]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table></>
                )}
            </div>
            
        </PageContainer>
    )
})