package com.projetosintegrados.controllers;

import com.projetosintegrados.entities.PedidoProduto;
import com.projetosintegrados.services.ArtistaEventoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@AllArgsConstructor
@RestController
@RequestMapping(value = "api/v1/pedido-produto")
public class PedidoProdutoController {

    @Autowired
    private ArtistaEventoService service;


    @GetMapping("/{id}")
    public PedidoProduto getById(@PathVariable Integer id) {
        return service.findById(id);
    }

    @GetMapping
    public Iterable<PedidoProduto> list(
            @RequestParam(required = false, name = "filter") String filterStr,
            @RequestParam(required = false, name = "range") String rangeStr,
            @RequestParam(required = false, name = "sort") String sortStr
    ) {
        return service.filterBy(filterStr, rangeStr, sortStr);
    }

    @PostMapping
    public PedidoProduto create(@RequestBody PedidoProduto pedidoProduto) {
        return service.save(pedidoProduto);
    }

    @PutMapping("/{id}")
    public PedidoProduto update(@PathVariable Integer id, @RequestBody PedidoProduto pedidoProduto) {
        if (!pedidoProduto.getId().equals(id)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id do produto do pedido não confere com o id da requisição");
        }
        return service.save(pedidoProduto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.deleteById(id);
    }
}
