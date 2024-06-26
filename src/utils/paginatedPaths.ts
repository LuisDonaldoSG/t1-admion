import { PathsElementsI } from "@interfaces/paths";
import { BILLING_PATH, HOME_PATH, LOGS_APIS__GUIDE_PATH, LOGS_T1_ENVIOS_PATH, SHOPS_PATH } from "./paths";
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoDevIcon from '@mui/icons-material/LogoDev';

export const paginatedPaths: Record<string, PathsElementsI> = {
    [HOME_PATH]: {
        icon: HomeIcon,
        pathData: {
            alias: 'Home',
            route: HOME_PATH
        }
    },
    'Facturación': {
        icon: CreditCardIcon,
        pathData: [
            {
                alias: 'Facturas mensajerías',
                route: BILLING_PATH
            }
        ]
    }
    ,
    [SHOPS_PATH]: {
        icon: ShoppingCartIcon,
        pathData: {
            alias: 'Comercios',
            route: SHOPS_PATH
        }
    },
    ['Logs']: {
        icon: LogoDevIcon,
        pathData: [
            {
                alias: 'Logs T1 Envios',
                route: LOGS_T1_ENVIOS_PATH
            },
            {
                alias: 'Logs APIs Guías',
                route: LOGS_APIS__GUIDE_PATH
            }
        ]
    }
};