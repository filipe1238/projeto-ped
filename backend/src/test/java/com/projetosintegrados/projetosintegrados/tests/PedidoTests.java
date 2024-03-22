package com.projetosintegrados.projetosintegrados.tests;

import com.projetosintegrados.entities.Pedido;
import com.projetosintegrados.projetosintegrados.MainTestClass;

public class PedidoTests extends MainTestClass<Pedido> {
    /**
     * Método que retorna o endpoint para a entidade
     * @return
     */
    public String getEndpoint() {
        return "/pedidos";
    }

    /**
     * Método que retorna um novo objeto da entidade
     * @return
     */
    @Override
    public Pedido returnNewObject() {
        return new Pedido();
    }

    /**
     * Método que seta a propriedade do objeto
     * @param object
     * @param propertyValue
     */
    public void setProperty(Pedido object, String propertyValue) {
        object.setNome(propertyValue);
    }
}
