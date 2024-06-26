import { Link, FieldProps, useRecordContext } from 'react-admin';
import PhotoFieldComponent from "../fotonome/PhotoFieldComponent";


const PhotoLinkComponent = (_: FieldProps<any>) => {
    const record = useRecordContext<any>();
    if (!record) {
        return null;
    }
    return (
        <Link to={`/pedidos/${record?.pedido?.id}`}>
            <PhotoFieldComponent />
        </Link>
    );
};

export default PhotoLinkComponent;
