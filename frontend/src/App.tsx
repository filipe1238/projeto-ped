import {
    Admin,
    Resource,
    useStore,
    ShowGuesser,
    localStorageStore,
    StoreContextProvider,
    CustomRoutes
} from "react-admin";
import { Route } from 'react-router';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import dataProvider from "./dataProvider";
import {authProvider} from "./authProvider";
import {ThemeName, themes} from "./themes/themes";
import pedidos from "./components/pedidos/index";
import produtos from "./components/produtos";
import pedidoprodutos from "./components/pedidoprodutos";
import {Layout, Login} from "./layout";
import CreateUserForm from "./CreateUserForm";
import {Dashboard} from "./components/dashboard";
import customPortugueseMessages from "./translations/pt-br";
import customEnglishMessages from "./translations/en";
import users from "./components/users";


const store = localStorageStore(undefined, 'ShowsApp');
const App = () => {
    const [themeName] = useStore<ThemeName>('themeName', 'radiant');
    const lightTheme = themes.find(theme => theme.name === themeName)?.light;
    const darkTheme = themes.find(theme => theme.name === themeName)?.dark;
    const messages = {
        'pt-br': customPortugueseMessages,
        'en': customEnglishMessages,
    };
    const i18nProvider = polyglotI18nProvider(
        locale =>
            messages[locale],
        'pt-br',
        [{locale: 'pt-br', name: 'Português'}, {locale: 'en', name: 'English'}],
        {allowMissing: true}
    );

    return (
        <Admin dataProvider={dataProvider}
               authProvider={authProvider}
               dashboard={Dashboard}
               defaultTheme="dark"
               loginPage={Login}
               layout={Layout}
               lightTheme={lightTheme}
               darkTheme={darkTheme}
               i18nProvider={i18nProvider}
               store={store}
               disableTelemetry>
            <CustomRoutes>
                <Route path="/create-user" element={<CreateUserForm/>}/>
            </CustomRoutes>
            <Resource name="pedidos" {...pedidos} show={ShowGuesser}/>
            <Resource name="produtos" {...produtos} show={ShowGuesser}/>
            <Resource name="pedido-produto" {...pedidoprodutos} />
            {/*<Resource name="produto" {...artistaeventos} />*/}
            <Resource name="users" {...users} show={ShowGuesser}/>
            {/*<Resource name="contrato-artista" />*/}
        </Admin>
    );
};

const AppWrapper = () => (
    <StoreContextProvider value={store}>
        <App/>
    </StoreContextProvider>
);

export default AppWrapper;