interface GeoI {
    lat: string;
    lng: string;
}

interface AddressI {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoI;
}

interface CompanyI {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserI {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressI;
    phone: string;
    website: string;
    company: CompanyI;
}