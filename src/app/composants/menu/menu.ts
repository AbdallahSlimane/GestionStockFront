export interface Menu{
    heading?: string;
    id?: string;
    titre?: string;
    icon?: string;
    url?: string;
    activate?: boolean;
    sousMenu?: Array<Menu>;
}