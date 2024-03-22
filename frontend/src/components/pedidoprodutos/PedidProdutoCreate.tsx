import {
    AutocompleteInput,
    Create, NumberInput,
    SimpleForm,
    useGetList, useRecordContext,
} from "react-admin"
import {useEffect, useState} from "react";


const GenricEdit = (props) => {
    const {data: choicesProds, isLoading: isLoadingChoices} = useGetList('produtos');
    const {data: choicesPed, isLoading: isLoadingChoicesArtista} = useGetList('pedidos');
    const record = useRecordContext();
    if (!record) {
        return <>Nao é possivel criar por esse caminho</>;
    } else {
        console.log('record', record);
    }

    // eslint-disable-next-line react/prop-types
    const {setPedido} = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setPedido(record?.pedido);
    }, [record?.pedido, setPedido]);



    if (isLoadingChoices || isLoadingChoicesArtista) {
        return null;
    }


    return (
        <SimpleForm>

            <AutocompleteInput
                isRequired={true}
                disabled={true}
                source="pedido"
                choices={choicesPed}
                optionText="nome"
                optionValue="id"
                label="resources.pedido.name"
            />

            <AutocompleteInput
                isRequired={true}
                source="produto"
                choices={choicesProds}
                optionText="nome"
                optionValue="id"
                label="resources.produto.name"
            />

            <NumberInput source="quantidade" label="resources.produto.fields.quantidade" />


        </SimpleForm>
    )
};

export const PedidProdutoCreate = (props) => {
    const [pedido, setPedido] = useState(null);
    return (
        <Create title="Adicionar Artista ao Evento"
              redirect={`/pedidos/${pedido}/produtos`}
              {...props}
              actions={null}
              undoable={false}>
            <GenricEdit setPedido={setPedido}/>
        </Create>
    );
}

