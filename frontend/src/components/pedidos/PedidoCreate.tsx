import {Create, DateInput, SelectInput, TabbedForm, TextInput} from "react-admin";
import Nacionalidades from "../../types/Nacionalidades";
import React from "react";
import Poster from "../fotonome/Poster";
import CustomEditActions from "../editactions/EditActions";
import {PedidoList} from "./PedidoList";

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);


export const PedidoCreate = (props) => {

    return (
        <Create {...props} actions={<CustomEditActions />}>
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

            </TabbedForm>
        </Create>
    );
};