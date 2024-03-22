package com.projetosintegrados.entities;

import com.projetosintegrados.utils.ParentEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;


@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PedidoProduto extends ParentEntity {
    @ManyToOne
    @JoinColumn(name = "produto")
    private Produto produto;

    @ManyToOne
    @JoinColumn(name = "pedido")
    private Pedido pedido;

    private Integer quantidade;
}
