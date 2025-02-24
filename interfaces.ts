export interface Welcome {
    id:               number;
    naam:             string;
    beschrijving:     string;
    leeftijd:         number;
    actief:           boolean;
    oprichtingsdatum: Date;
    imageURL:         string;
    type:             string;
    "hobby's":        string[];
    locatie:          Locatie;
}

export interface Locatie {
    id:           number;
    land:         string;
    staat:        string;
    breedtegraad: number;
    lengtegraad:  number;
}
