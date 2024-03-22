package com.projetosintegrados.controllers;

import com.projetosintegrados.entities.Pedido;
import com.projetosintegrados.services.PedidoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@AllArgsConstructor
@RestController
@RequestMapping(value = "api/v1/pedidos")
public class PedidoController {
    @Autowired
    private PedidoService pedidoService;

    @GetMapping("/{id}")
    public Pedido getById(@PathVariable Integer id) {
        return pedidoService.findById(id);
    }

    @GetMapping
    public Iterable<Pedido> list(
            @RequestParam(required = false, name = "filter") String filterStr,
            @RequestParam(required = false, name = "range") String rangeStr,
            @RequestParam(required = false, name = "sort") String sortStr
    ) {
        return pedidoService.filterBy(filterStr, rangeStr, sortStr);
    }

    @PostMapping
    public Pedido create(@RequestBody Pedido pedido) {
        return pedidoService.save(pedido);
    }

    @PutMapping("/{id}")
    public Pedido update(@PathVariable Integer id, @RequestBody Pedido pedido) {
        if (!pedido.getId().equals(id)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id do artista não confere com o id da requisição");
        }
        return pedidoService.save(pedido);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        pedidoService.deleteById(id);
    }
}
