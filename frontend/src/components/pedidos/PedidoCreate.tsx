import {Create, DateInput, SelectInput, TabbedForm, TextInput} from "react-admin";
import Nacionalidades from "../../types/Nacionalidades";
import React from "react";
import Poster from "../fotonome/Poster";
import CustomEditActions from "../editactions/EditActions";
import {PedidoList} from "./PedidoList";
import {Grid} from "@mui/material";
import {PedidoStatusEnum} from "../../enums/PedidoStatusEnum";

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

                    <TextInput source="nome" multiline label="resources.pedido.fields.nome" required fullWidth/>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <SelectInput source="status" label="resources.pedido.fields.status" choices={[
                                {id: PedidoStatusEnum.PENDENTE, name: 'Pendente'},
                                {id: PedidoStatusEnum.ABERTO, name: 'Aberto'}, // 'Aberto
                                {id: PedidoStatusEnum.PRONTO, name: 'Pronto'}, // 'Pronto
                                {id: PedidoStatusEnum.ENTREGUE, name: 'Entregue'}, // 'Entregue
                                {id: PedidoStatusEnum.CANCELADO, name: 'Cancelado'}, // 'Cancelado
                            ]}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DateInput source="data" label="resources.pedido.fields.dataHora" required fullWidth/>
                        </Grid>
                    </Grid>
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