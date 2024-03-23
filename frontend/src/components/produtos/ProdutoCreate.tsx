import {Create, DateInput, NumberInput, SelectInput, TabbedForm, TextInput} from "react-admin";
import Nacionalidades from "../../types/Nacionalidades";
import React from "react";
import Poster from "../fotonome/Poster";
import CustomEditActions from "../editactions/EditActions";
import {ProdutoList} from "./ProdutoList";
import {InputAdornment} from "@mui/material";

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);


export const ProdutoCreate = (props) => {

    return (
        <Create {...props} actions={<CustomEditActions />}>
            <TabbedForm>

                <TabbedForm.Tab
                    label="resources.pedido.form.detalhes"
                    sx={{maxWidth: '40em'}}>
                    <Poster urlString={"imagem"}/>

                    <TextInput source="nome" multiline label="resources.produto.fields.nome" required />

                    <NumberInput
                        source="preco"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">R$</InputAdornment>
                            ),
                        }}
                        required
                        fullWidth
                    />

                </TabbedForm.Tab>
                <TabbedForm.Tab
                    label="resources.produto.form.descricao"
                    path="descricao">
                    <RichTextInput source="descricao" />
                </TabbedForm.Tab>

                <TabbedForm.Tab
                    label="resources.produto.form.extras"
                    path="redes-sociais"
                    sx={{maxWidth: '40em'}}>
                    <Poster urlString={"imagem"}/>
                    <TextInput source="imagem" multiline fullWidth label="resources.artista.fields.fotoUrl"/>
                </TabbedForm.Tab>

            </TabbedForm>
        </Create>
    );
};