package com.projetosintegrados.repositories;

import com.projetosintegrados.entities.PedidoProduto;
import com.projetosintegrados.entities.Produto;
import com.projetosintegrados.utils.BaseRepository;

import java.util.List;

public interface PedidoProdutoRepository extends BaseRepository<PedidoProduto, Integer> {
    public List<PedidoProduto> findByPedidoId(Integer pedidoId);

}
