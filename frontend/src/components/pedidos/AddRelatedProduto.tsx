import { CreateButton, useRecordContext } from 'react-admin';

const AddRelatedProduto = () => {
    const record = useRecordContext();
// save the record.id in the state of the CreateButton
    return (
        <CreateButton
            resource={`pedido-produto`}
    state={{ record: { pedido: record.id } }}
    />
);
};

export default AddRelatedProduto;