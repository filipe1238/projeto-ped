import dataProvider from "../dataProvider";
import {GET_MANY_REFERENCE} from "react-admin";
import {useEffect, useState} from "react";

export const useGetProdutosFromPedido = (pedidoId) => {
    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        if (pedidoId !== null) {
            try {
                fetchArtistasData(pedidoId).then((response) => {
                    setProdutos(response.data);
                });
            } catch (e) {
                console.error(e)
            }
        }
    }, [pedidoId]);
    return produtos;
};

const fetchArtistasData = async (pedidoId) => {
    const params = {
        filter: {"pedido": pedidoId},
        range: JSON.stringify([0, 25]),
        pagination: {page: 1, perPage: 25},
        sort: {field: "id", order: "DESC"},
    };

    return await dataProvider(GET_MANY_REFERENCE, 'pedido-produto', params);
}