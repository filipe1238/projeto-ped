package com.projetosintegrados.services;

import com.projetosintegrados.entities.Pedido;
import com.projetosintegrados.repositories.PedidoRepository;
import com.projetosintegrados.utils.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@AllArgsConstructor
@Service
public class PedidoService extends ParentService<Pedido> {

    @Autowired
    private PedidoRepository repository;
    @Autowired
    private FilterService<Pedido, Integer> filterService;

    @Override
    public BaseRepository<Pedido, Integer> getRepository() {
        return repository;
    }


    @Override
    public void beforeDelete(Pedido entity) {
//        if (!entity.getPedidoProdutoList().isEmpty()) {
//            throw new ResponseStatusException(HttpStatus.CONFLICT, "Pedido possui produtos associados");
//        }
    }

    @Override
    public Iterable<Pedido> filterBy(String filterStr, String rangeStr, String sortStr) {
        QueryParamWrapper wrapper = QueryParamExtractor.extract(filterStr, rangeStr, sortStr);
        // este searchFields é uma lista de campos que serão usados para filtrar a busca
        List<String> searchFields = List.of("nome");
        return filterService.filterBy(wrapper, getRepository(), searchFields);
    }

}
