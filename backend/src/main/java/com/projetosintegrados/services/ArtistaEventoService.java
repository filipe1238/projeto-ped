package com.projetosintegrados.services;

import com.projetosintegrados.entities.PedidoProduto;
import com.projetosintegrados.repositories.ArtistaEventoRepository;
import com.projetosintegrados.utils.BaseRepository;
import com.projetosintegrados.utils.ParentService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class ArtistaEventoService extends ParentService<PedidoProduto> {

    @Autowired
    private ArtistaEventoRepository repository;
    @Autowired
    private PedidoService pedidoService;
//    @Autowired
//    private EventoService showService;
    private final ModelMapper mapper;

    @Override
    public BaseRepository<PedidoProduto, Integer> getRepository() {
        return repository;
    }
}
