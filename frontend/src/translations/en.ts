import {TranslationMessages} from 'react-admin';
import englishMessages from 'ra-language-english';

const customEnglishMessages: TranslationMessages = {
    ...englishMessages,
    pos: {
        menu: {
            cadastros: 'Registers',
            eventos: 'Events',
            artistas: 'Artists',
            users: 'Users',
            contratos: 'Contracts',
            musicas: 'Songs',
            pedidos: 'Orders',
            produtos: 'Products',
        },
        backButton: 'Back',
    },
    resources: {
        evento: {
            name: 'Event',
            namePlural: 'Events',
            fields: {
                nome: 'Name',
                dataHora: 'Date and Time',
                local: 'Location',
                descricao: 'Description',
            },
            form: {
                detalhes: 'Details',
                descricao: 'Description',
                artistas: 'Artists',
            }
        },
        musica: {
            name: 'Music',
            namePlural: 'Songs',
            fields: {
                nome: 'Name',
                dataLancamento: 'Release Date',
                genero: 'Musical Genre',
                descricao: 'Description',
            },
            form: {
                detalhes: 'Details',
                descricao: 'Description',
                artistas: 'Artists',
                album: 'Album',
            }
        },
        artista: {
            name: 'Artist',
            namePlural: 'Artists',
            fields: {
                nome: 'Name',
                nacionalidade: 'Nationality',
                dataNascimento: 'Date of Birth',
                biografia: 'Biography',
                fotoUrl: 'Photo Link',
                instagramUrl: 'Instagram',
                facebookUrl: 'Facebook',
                twitterUrl: 'Twitter',
                dataCriacao: 'Creation Date',
            },
            form: {
                detalhes: 'Details',
                biografia: 'Biography',
                RedesSociais: 'Social Media',
            }
        },
        users: {
            name: 'User',
            namePlural: 'Users',
            fields: {
                username: 'Username',
                password: 'Password',
                email: 'E-mail',
                dataCriacao: 'Creation Date',
            },
            form: {
                detalhes: 'Details',
                password: 'Password',
                passwordConfirm: 'Confirm Password',
            }
        },
        pedido: {
            name: 'Order',
            namePlural: 'Orders',
            fields: {
                nome: 'Name',
                dataHora: 'Date of Order',
                status: 'Status',
                observacoes: 'Observations',
                usuario: 'User',
                formaPagamento: 'Payment Method',
                total: 'Total',
            },
            form: {
                detalhes: 'Details',
                descricao: 'Description',
                observacoes: 'Observations',
                usuario: 'User',
            }
        },
        produto: {
            name: 'Product',
            namePlural: 'Products',
            fields: {
                nome: 'Name',
                descricao: 'Description',
                preco: 'Price',
                foto: 'Photo Link',
                status: 'Status',
                formaPagamento: 'Payment Method',
            },
            form: {
                detalhes: 'Details',
                descricao: 'Description',
                preco: 'Price',
                fotoUrl: 'Photo Link',
                extras: 'Extras',
                quantidade: 'Quantity',
            }
        },
    }
};

export default customEnglishMessages;
