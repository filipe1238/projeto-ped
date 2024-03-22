import { CreateButton, useRecordContext } from 'react-admin';

const AddRelatedProduto = () => {
    const record = useRecordContext();

    return (
        <CreateButton
            resource={`pedido-produto`}
    state={{ record: { pedido: record.id } }}
    />
);
};

export default AddRelatedProduto;