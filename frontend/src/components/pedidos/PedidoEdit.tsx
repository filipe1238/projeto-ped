import {
    Datagrid, DateField,
    DateInput, DeleteButton,
    Edit, EditButton, Pagination, ReferenceManyField,
    SelectInput,
    TabbedForm, TextField,
    TextInput,
    useRecordContext
} from "react-admin";
import Poster from "../fotonome/Poster";
import React from "react";
import CustomEditActions from "../editactions/EditActions";
import PhotoLinkComponent from "../produtos/PhotoLinkComponent";
import AddRelatedProduto from "./AddRelatedProduto";
import {Theme, useMediaQuery} from "@mui/material";

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);


const PedidoEditTitle = () => {
    const record = useRecordContext();
    return <span>{`${record.nome}`}</span>;
};

export const PedidoEdit = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

    return (<>
            <Edit title={<PedidoEditTitle/>} mutationMode="pessimistic" actions={<CustomEditActions/>}>
                <TabbedForm>

                    <TabbedForm.Tab
                        label="resources.pedido.form.detalhes"
                        sx={{maxWidth: '40em'}}>
                        <Poster urlString={"fotoUrl"}/>

                        <TextInput source="nome" multiline label="resources.pedido.fields.nome" />
                        <TextInput source="status" multiline label="resources.pedido.fields.status" />
                        <DateInput source="data" label="resources.pedido.fields.dataHora" />
                        <TextInput source="formaPagamento" label="resources.pedido.fields.formaPagamento" />

                    </TabbedForm.Tab>
                    <TabbedForm.Tab
                        label="resources.pedido.form.descricao"
                        path="descricao">
                        <RichTextInput source="descricao" />
                    </TabbedForm.Tab>

                    <TabbedForm.Tab
                        label="resources.pedido.form.produtos"
                        path="produtos">
                        <ReferenceManyField
                            reference="pedido-produto"
                            target="pedido"
                            pagination={<Pagination/>}>
                            {!isSmall ? (
                                <Datagrid
                                    sx={{
                                        width: '100%',
                                        '& .column-comment': {
                                            maxWidth: '20em',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        },
                                    }}>
                                    <PhotoLinkComponent source="produto.nome" label="resources.produto.fields.nome"/>

                                    <TextField source="quantidade" label="resources.produto.fields.quantidade"/>
                                    <TextField source="produto.preco" label="resources.produto.fields.preco"/>
                                    {/*<TextField source={"produto.categoria.nome"} label="resources.produto.fields.categoria" />*/}
                                    <EditButton/>
                                    <DeleteButton redirect={false} mutationMode="pessimistic"/>
                                </Datagrid>
                            ) : (
                                <Datagrid>
                                    <TextField source="artista.nome" label="resources.artista.fields.nome"/>
                                    <DateField source="artista.dataNascimento" label="resources.artista.fields.dataNascimento"/>
                                    <EditButton/>
                                    <DeleteButton redirect={false} mutationMode="pessimistic"/>
                                </Datagrid>
                            )}

                            <AddRelatedProduto/>
                        </ReferenceManyField>
                    </TabbedForm.Tab>

                </TabbedForm>
            </Edit>
        </>
    )
};
