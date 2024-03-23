package com.projetosintegrados.services;

import com.projetosintegrados.entities.PedidoProduto;
import com.projetosintegrados.entities.Produto;
import com.projetosintegrados.repositories.PedidoProdutoRepository;
import com.projetosintegrados.utils.BaseRepository;
import com.projetosintegrados.utils.ParentService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PedidoProdutoService extends ParentService<PedidoProduto> {

    @Autowired
    private PedidoProdutoRepository repository;
    private final ModelMapper mapper;

    @Override
    public BaseRepository<PedidoProduto, Integer> getRepository() {
        return repository;
    }
}
