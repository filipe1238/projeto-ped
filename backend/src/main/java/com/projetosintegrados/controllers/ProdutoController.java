package com.projetosintegrados.controllers;

import com.projetosintegrados.entities.Pedido;
import com.projetosintegrados.entities.Produto;
import com.projetosintegrados.services.PedidoService;
import com.projetosintegrados.services.ProdutoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@AllArgsConstructor
@RestController
@RequestMapping(value = "api/v1/produtos")
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/{id}")
    public Produto getById(@PathVariable Integer id) {
        return produtoService.findById(id);
    }

    @GetMapping
    public Iterable<Produto> list(
            @RequestParam(required = false, name = "filter") String filterStr,
            @RequestParam(required = false, name = "range") String rangeStr,
            @RequestParam(required = false, name = "sort") String sortStr
    ) {
        return produtoService.filterBy(filterStr, rangeStr, sortStr);
    }

    @PostMapping
    public Produto create(@RequestBody Produto pedido) {
        return produtoService.save(pedido);
    }

    @PutMapping("/{id}")
    public Produto update(@PathVariable Integer id, @RequestBody Produto produto) {
        if (!produto.getId().equals(id)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id do artista não confere com o id da requisição");
        }
        return produtoService.save(produto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        produtoService.deleteById(id);
    }
}
