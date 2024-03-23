package com.projetosintegrados.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetosintegrados.utils.ParentEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pedido extends ParentEntity {
    private String nome;
    private Date data;
    @Enumerated(EnumType.STRING)
    private PedidoStatusEnum status;
    private String formaPagamento;
    private String descricao;


    /**
     * JsonIgnore: ignora a propriedade artistasList na serialização do objeto, evitando
     * que o objeto seja serializado em loop infinito.
     */
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pedido", orphanRemoval = false, cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<PedidoProduto> pedidoProdutoList;

    public Pedido(int id) {
        super(id);
    }
}