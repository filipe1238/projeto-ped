import {
    DateInput,
    Edit, NumberInput,
    TabbedForm,
    TextInput,
    useRecordContext
} from "react-admin";
import Poster from "../fotonome/Poster";
import React from "react";
import CustomEditActions from "../editactions/EditActions";
import {InputAdornment} from "@mui/material";

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);


const ProdutoEditTitle = () => {
    const record = useRecordContext();
    return <span>{`${record?.nome}`}</span>;
};

export const ProdutoEdit = () => {
    return (<>
            <Edit title={<ProdutoEditTitle/>} mutationMode="pessimistic" actions={<CustomEditActions/>}>
                <TabbedForm>

                    <TabbedForm.Tab
                        label="resources.pedido.form.detalhes"
                        sx={{maxWidth: '40em'}}>
                        <Poster urlString={"imagem"}/>

                        <TextInput source="nome" multiline label="resources.produto.fields.nome" required fullWidth/>
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

            </Edit>
        </>
    )
};