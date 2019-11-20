export interface WashRequest {
    id?: string;
    customerAccountId: string;
    status: WashStatus;
    washType: WashType;
    time: Date;
    cleanerAccountId?: string;
    carDetails: CarDetails;
    location: Location;
}
export enum WashStatus {
    pending = 'pending',
    accepted = 'accepted',
    enRoute = 'enRoute',
    inProgress = 'inProgress',
    cancelled = 'cancelled',
    completed = 'completed',
}
export enum WashType {
    platinum = 'platinum',
    gold = 'gold',
    silver = 'silver',
    bronze = 'bronze',
}
export interface CarDetails {
    make: string;
    model: string;
    category: string;
    plateNumber: string;
    color: string;
}
export interface Location {
    longitude: string;
    latitude: string;
}
