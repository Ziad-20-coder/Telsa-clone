export interface Hero {
    Hero: HeroElement[];
}

export interface HeroElement {
    id:        number;
    type:      string;
    src:       string;
    title:     string;
    header:    string;
    subHeader: string;
    mainBTN:   string;
    subBTN:    string;
}
