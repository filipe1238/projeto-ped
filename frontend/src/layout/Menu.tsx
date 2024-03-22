import { useState } from 'react';
import Box from '@mui/material/Box';
import {
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';
import pedidos from "../components/pedidos/index";
import users from "../components/users/index";
import produtos from "../components/produtos/index";

import SubMenu from './SubMenu';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCadastros: true,
    });
    const [open] = useSidebarState();

    const handleToggle = (menu: string) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />
            <SubMenu
                handleToggle={() => handleToggle('menuCadastros')}
                isOpen={state.menuCadastros}
                name="pos.menu.cadastros"
                icon={<pedidos.icon />}
                dense={dense}>
                <MenuItemLink
                    to="/users"
                    state={{ _scrollToTop: true }}
                    primaryText={`pos.menu.users`}
                    leftIcon={<users.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/pedidos"
                    primaryText={`pos.menu.pedidos`}
                    state={{ _scrollToTop: true }}
                    leftIcon={<pedidos.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/produtos"
                    primaryText={`pos.menu.produtos`}
                    state={{ _scrollToTop: true }}
                    leftIcon={<produtos.icon />}
                    dense={dense}
                />
            </SubMenu>

        </Box>
    );
};

export default Menu;
