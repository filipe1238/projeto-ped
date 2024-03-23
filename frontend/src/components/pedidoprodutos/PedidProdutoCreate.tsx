import {
    AutocompleteInput,
    Create, NumberInput,
    SimpleForm,
    useGetList, useRecordContext,
} from "react-admin"
import {useEffect, useState} from "react";
import {useGetProdutosFromPedido} from "../../Hooks/useGetProdutosFromPedido";
import {useSaveContext} from "ra-core";


const GenricEdit = (props) => {
    const {data: choicesProds, isLoading: isLoadingChoices} = useGetList('produtos');
    const {data: choicesPed, isLoading: isLoadingChoicesArtista} = useGetList('pedidos');
    const saveContext = useSaveContext();
    const record = useRecordContext();
    const produtos = useGetProdutosFromPedido(record?.pedido);
    if (!record) {
        return <>Nao é possivel criar por esse caminho</>;
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

    const handleValidateProduto= (id) => {
        // fetch data from the server, using the showId
        if (produtos.length > 0) {
            const produtosIds = produtos.map((produto) => {
                if (!produto.produto) {
                    return null;
                }
                return produto.produto.id
            });
            if (produtosIds.includes(id)) {
                return "Produto já adicionado ao pedido";
            }
        }
        return undefined;
    };

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
                validate={handleValidateProduto}
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
