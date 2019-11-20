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
    PENDING = 'Pending',
    ACCEPTED = 'Accepted',
    EN_ROUTE = 'En Route',
    IN_PROGRESS = 'In Progress',
    CANCELLED = 'Cancelled',
    COMPLETED = 'Completed',
}
export enum WashType {
    PLATINUM = 'Platinum',
    GOLD = 'Gold',
    SILVER = 'Silver',
    BRONZE = 'Bronze',
}
export interface CarDetails {
    make: string;
    model: string;
    category: string;
    plateNumber: string;
    color: string;
}
