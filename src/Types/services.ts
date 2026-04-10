export interface Services {
    links:               Link[];
    megaContent:         MegaContent;
    heroData:            HeroDatum[];
    snapCarousel:        SnapCarousel[];
    promotionCards:      PromotionCard[];
    offersCards:         OffersCard[];
    chargeMap:           ChargeMap[];
    iconsAndItems:       IconsAndItem[];
    secondCarouselItems: ChargeMap[];
    footer:              Footer[];
}

export interface ChargeMap {
    id:      number;
    header:  string;
    title:   string;
    mainBTN: string;
    subBTN:  string;
    image?:  string;
}

export interface Footer {
    id:   number;
    link: string;
}

export interface HeroDatum {
    id:        number;
    header:    string;
    subHeader: string;
    mainBTN:   string;
    subBTN:    string;
    content:   string;
}

export interface IconsAndItem {
    id:                    number;
    superChargerNum:       string;
    superChargerText:      string;
    destantionChargerNum:  string;
    destantionChargerText: string;
    image1:                string;
    image2:                string;
}

export interface Link {
    id:    number;
    title: string;
    link:  string;
}

export interface MegaContent {
    Vehicles: Charging[];
    Energy:   Charging[];
    Charging: Charging[];
    Shop:     Charging[];
}

export interface Charging {
    id:    number;
    title: string;
    image: string;
}

export interface OffersCard {
    id:      number;
    header:  string;
    title:   string;
    mainBTN: string;
    subBTN?: string;
    image:   string;
    subBtn?: string;
}

export interface PromotionCard {
    id:     number;
    header: string;
    title:  string;
    BTN:    string;
    image:  string;
}

export interface SnapCarousel {
    id:      number;
    header:  string;
    pLink:   string;
    tag:     string;
    mainBTN: string;
    subBTN:  string;
    image:   string;
}
