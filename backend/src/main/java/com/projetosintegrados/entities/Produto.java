package com.projetosintegrados.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetosintegrados.utils.ParentEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Produto extends ParentEntity {
    private String nome;
    private String descricao;
    private String imagem;
    private BigDecimal preco;


    /**
     * JsonIgnore: ignora a propriedade artistasList na serialização do objeto, evitando
     * que o objeto seja serializado em loop infinito.
     */
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "produto", orphanRemoval = false, cascade = CascadeType.REFRESH)
    @JsonIgnore
    private List<PedidoProduto> pedidoProdutoList;

    public Produto(int id) {
        super(id);
    }
}