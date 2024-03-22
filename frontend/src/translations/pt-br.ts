import {TranslationMessages} from 'react-admin';
import ptBrMessages from 'ra-language-pt-br';

// @ts-ignore
const customPortugueseMessages: TranslationMessages = {
    ...ptBrMessages,
    pos: {
        menu: {
            cadastros: 'Cadastros',
            eventos: 'Eventos',
            artistas: 'Artistas',
            users: 'Usuários',
            contratos: 'Contratos',
            musicas: 'Músicas',
            pedidos: 'Pedidos',
            produtos: 'Produtos',
        },
        backButton: 'Voltar',
    },
    resources: {
        evento: {
            name: 'Evento',
            namePlural: 'Eventos',
            fields: {
                nome: 'Nome',
                dataHora: 'Data e Hora',
                local: 'Local',
                descricao: 'Descrição',
            },
            form: {
                detalhes: 'Detalhes',
                descricao: 'Descrição',
                artistas: 'Artistas',
            }
        },
        musica: {
            name: 'Música',
            namePlural: 'Músicas',
            fields: {
                nome: 'Nome',
                dataLancamento: 'Data Lançamento',
                genero: 'Gênero Musical',
                descricao: 'Descrição',
            },
            form: {
                detalhes: 'Detalhes',
                descricao: 'Descrição',
                artistas: 'Artistas',
                album: 'Álbum',
            }
        },
        artista: {
            name: 'Artista',
            namePlural: 'Artistas',
            fields: {
                nome: 'Nome',
                nacionalidade: 'Nacionalidade',
                dataNascimento: 'Data de Nascimento',
                biografia: 'Biografia',
                fotoUrl: 'Link da Foto',
                instagramUrl: 'Instagram',
                facebookUrl: 'Facebook',
                twitterUrl: 'Twitter',
                dataCriacao: 'Data de Criação',
            },
            form: {
                detalhes: 'Detalhes',
                biografia: 'Biografia',
                RedesSociais: 'Redes Sociais',
            }
        },
        users: {
            name: 'Usuário',
            namePlural: 'Usuários',
            fields: {
                username: 'Nome de Usuário',
                password: 'Senha',
                email: 'E-mail',
                dataCriacao: 'Data de Criação',
            },
            form: {
                detalhes: 'Detalhes',
                password: 'Senha',
                passwordConfirm: 'Confirmação de Senha',
            }
        },
        pedido: {
            name: 'Pedido',
            namePlural: 'Pedidos',
            fields: {
                nome: 'Nome',
                dataHora: 'Data do Pedido',
                status: 'Status',
                valorTotal: 'Valor Total',
                cliente: 'Cliente',
                produtos: 'Produtos',
                formaPagamento: 'Forma de Pagamento',
            },
            form: {
                detalhes: 'Detalhes',
                descricao: 'Descrição',
                produtos: 'Produtos',
                cliente: 'Cliente',
            }
        },
        produto: {
            name: 'Produto',
            namePlural: 'Produtos',
            fields: {
                nome: 'Nome',
                descricao: 'Descrição',
                preco: 'Preço',
                quantidade: 'Quantidade',
                foto: 'Link da Foto',
                status: 'Status',
            },
            form: {
                detalhes: 'Detalhes',
                descricao: 'Descrição',
                fotoUrl: 'Link da Foto',
                extras: 'Extras',
                quantidade: 'Quantidade',
            }
        },
    }

};

export default customPortugueseMessages;
