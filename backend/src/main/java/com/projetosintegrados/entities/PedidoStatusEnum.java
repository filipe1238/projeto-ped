package com.projetosintegrados.entities;

public enum PedidoStatusEnum {
    PENDENTE("Pendente"),
    ABERTO("Aberto"),
    PRONTO("Pronto"),
    ENTREGUE("Entregue"),
    CANCELADO("Cancelado");

    private String status;

    PedidoStatusEnum(String status) {
        this.status = status;
    }
}
