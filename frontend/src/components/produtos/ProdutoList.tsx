import {Theme, useMediaQuery} from "@mui/material";
import {
    Datagrid,
    DateField,
    List,
    TextField,
    SearchInput,
    NumberField
} from "react-admin";
import PhotoFieldComponent from "../fotonome/PhotoFieldComponent";

const artistaFilters = [
    <SearchInput source="q" alwaysOn key={"search"}/>,
];

export const ProdutoList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));


    return (
        <List
            sort={{field: "id", order: "ASC"}}
            perPage={20}
            filters={artistaFilters}
            pagination={false}
            component="div">
            {isSmall ? (
                <PedidoMobileList/>
            ) : (
                <Datagrid rowClick="edit"
                          sx={{
                              width: '100%',
                              '& .column-comment': {
                                  maxWidth: '20em',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                              },
                          }}>
                    {/*<TextField source="id"/>*/}
                    <PhotoFieldComponent source="foto" label={"resources.produto.fields.nome"}/>
                    <NumberField source="preco"
                                 label={"resources.produto.fields.preco"}
                                 options={{style: 'currency', currency: 'BRL'}}/>

                    <DateField source="dataCriacao" showTime label={"resources.artista.fields.dataCriacao"}/>
                </Datagrid>
            )}
        </List>
    );
};

const PedidoMobileList = () => {
    // const {data, isLoading, total} = useListContext<any>();
    // if (isLoading || Number(total) === 0) {
    //     return null;
    // }
    return (
        <>
            <Datagrid rowClick="edit"
                      sx={{
                          width: '100%',
                          '& .column-comment': {
                              maxWidth: '20em',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                          },
                      }}>
                {/*<TextField source="id"/>*/}
                <PhotoFieldComponent source="nome"/>
                <NumberField source="preco"
                             label={"resources.produto.fields.preco"}
                                options={{style: 'currency', currency: 'BRL'}}/>
            </Datagrid>
        </>
    );
};
