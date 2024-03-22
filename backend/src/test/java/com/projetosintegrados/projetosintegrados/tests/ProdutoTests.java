package com.projetosintegrados.projetosintegrados.tests;

import com.projetosintegrados.entities.Produto;
import com.projetosintegrados.projetosintegrados.MainTestClass;

public class ProdutoTests extends MainTestClass<Produto> {

    @Override
    public String getEndpoint() {
        return "/produtos";
    }

    @Override
    public Produto returnNewObject() {
        return new Produto();
    }

    @Override
    public void setProperty(Produto object, String property) {
        object.setNome(property);
    }
}