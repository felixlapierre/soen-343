export interface WashRequest {
    id: string;
    customerAccountId: string;
    status: RequestStatus;
    washType: WashType;
    time: Date;
    cleanerAccountId?: string;
    carDetails: CarDetails;
}
export enum RequestStatus {
    pending = 'Pending',
    accepted = 'Accepted',
    enRoute = 'En Route',
    inProgress = 'In Progress',
    cancelled = 'Cancelled',
    completed = 'Completed',
}
export enum WashType {
    platinum = 'Platinum',
    gold = 'Gold',
    silver = 'Silver',
    bronze = 'Bronze',
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
