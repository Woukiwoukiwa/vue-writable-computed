export interface Character {
    name: string;
    overview: Overview;
    profile: Profile;
    badas: boolean;
}

export interface Overview {
    description: string;
}

export interface Profile {
    description: string;
}