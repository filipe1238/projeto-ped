import {
    AutocompleteInput,
    Edit, NumberInput,
    SimpleForm,
    useGetList,
    useRecordContext
} from "react-admin";
import {useState, useEffect} from "react";
import {useGetProdutosFromPedido} from "../../Hooks/useGetProdutosFromPedido";



const PedidoProdutoEditForm = (props) => {
    const {data: choicesProds, isLoading: isLoadingChoices} = useGetList('produtos');
    const {data: choicesPed, isLoading: isLoadingChoicesArtista} = useGetList('pedidos');
    const record = useRecordContext();

    if (!record) {
        return <>Nao é possivel criar por esse caminho</>;
    }

    // eslint-disable-next-line react/prop-types
    const {setPedido} = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setPedido(record?.pedido);
    }, [record?.pedido, setPedido]);
    

    return (
        <SimpleForm>
            <AutocompleteInput
                isRequired={true}
                disabled={true}
                source="pedido.id"
                choices={choicesPed}
                optionText="nome"
                optionValue="id"
                label="resources.pedido.name"
            />

            <AutocompleteInput
                isRequired={true}
                source="produto.id"
                choices={choicesProds}
                optionText="nome"
                optionValue="id"
                label="resources.produto.name"
            />

            <NumberInput source="quantidade" label="resources.produto.fields.quantidade" />

        </SimpleForm>
    )
};

export const PedidoProdutoEdit = (props) => {
    const [pedido, setPedido] = useState(null);
    return (
        <Edit title="Adicionar Artista ao Evento"
                redirect={`/pedidos/${pedido?.id}/produtos`}
                {...props}
                actions={null}
                undoable={false}>
            <PedidoProdutoEditForm setPedido={setPedido}/>
        </Edit>
    );
}
