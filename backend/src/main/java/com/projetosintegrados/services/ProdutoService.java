package com.projetosintegrados.services;

import com.projetosintegrados.entities.Pedido;
import com.projetosintegrados.entities.Produto;
import com.projetosintegrados.repositories.PedidoRepository;
import com.projetosintegrados.repositories.ProdutoRepository;
import com.projetosintegrados.utils.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@AllArgsConstructor
@Service
public class ProdutoService extends ParentService<Produto> {

    @Autowired
    private ProdutoRepository repository;
    @Autowired
    private FilterService<Produto, Integer> filterService;

    @Override
    public BaseRepository<Produto, Integer> getRepository() {
        return repository;
    }


    @Override
    public void beforeDelete(Produto entity) {
        if (!entity.getPedidoProdutoList().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Pedido não pode ser deletado pois possui produtos associados");
        }
    }

    @Override
    public Iterable<Produto> filterBy(String filterStr, String rangeStr, String sortStr) {
        QueryParamWrapper wrapper = QueryParamExtractor.extract(filterStr, rangeStr, sortStr);
        List<String> searchFields = List.of("nome");
        return filterService.filterBy(wrapper, getRepository(), searchFields);
    }

}
