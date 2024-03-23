import {
    Datagrid,
    DateInput, DeleteButton,
    Edit, EditButton, number, NumberField, Pagination, ReferenceManyField, SaveButton,
    SelectInput,
    TabbedForm, TextField,
    TextInput,
    useRecordContext,
    Show,
    Labeled,
} from "react-admin";
import Poster from "../fotonome/Poster";
import React, {useEffect, useState} from "react";
import CustomEditActions from "../editactions/EditActions";
import PhotoLinkComponent from "../produtos/PhotoLinkComponent";
import AddRelatedProduto from "./AddRelatedProduto";
import {Grid, Theme, useMediaQuery, Card, Stack} from "@mui/material";
import {PedidoStatusEnum} from "../../enums/PedidoStatusEnum";
import {useGetProdutosFromPedido} from "../../Hooks/useGetProdutosFromPedido";

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);


const PedidoEditTitle = () => {
    const record = useRecordContext();
    return <span>{`${record?.nome}`}</span>;
};

const PedidoTotal = (props) => {
    const record = useRecordContext();
    const [total, setTotal] = useState(0);

    if (!record) {
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const produtos = useGetProdutosFromPedido(record?.id);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (produtos.length > 0) {
            let calculatedTotal = 0;
            produtos.forEach((produto) => {
                calculatedTotal += produto.produto.preco * produto.quantidade;
            });
            setTotal(calculatedTotal);
        } else {
            setTotal(0);
        }
    }, [produtos]);
    return (
            <Card>
                <Stack>
                    <Labeled label="resources.pedido.fields.total">
                        <NumberField source="total" record={{total: total}}
                                   options={{style: 'currency', currency: 'BRL'}}/>
                    </Labeled>
                </Stack>
            </Card>
    );
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
                            <Grid item xs={12} sm={6}>
                                <TextInput source="formaPagamento" label="resources.pedido.fields.formaPagamento"/>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <PedidoTotal/>
                            </Grid>
                        </Grid>

                    </TabbedForm.Tab>
                    <TabbedForm.Tab
                        label="resources.pedido.form.descricao"
                        path="descricao">
                        <RichTextInput source="descricao"/>
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
                                    <NumberField source="produto.preco"
                                                 label={"resources.produto.fields.preco"}
                                                 options={{style: 'currency', currency: 'BRL'}}/>
                                    <EditButton/>
                                    <DeleteButton redirect={false} mutationMode="pessimistic"/>
                                </Datagrid>
                            ) : (
                                <Datagrid>
                                    <TextField source="produto.nome" label="resources.produto.fields.nome"/>
                                    <NumberField source="produto.preco"
                                                 label={"resources.produto.fields.preco"}
                                                 options={{style: 'currency', currency: 'BRL'}}/>
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
