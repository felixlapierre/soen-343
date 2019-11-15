export interface WashRequest {
    id: string;
    customerAccountId: string;
    status: RequestStatus;
    washType: WashType;
    time: Date;
    cleanerAccountId?: string;
    carDetails: CarDetails;
}
enum RequestStatus {
    PENDING,
    ACCEPTED,
    EN_ROUTE,
    IN_PROGRESS,
    CANCELLED,
    COMPLETED
}
enum WashType {
   BRONZE,
   GOLD,
   PLATINUM,
   SILVER
}
interface CarDetails {
    make: string;
    model: string;
    category: string;
    plateNumber: string;
    color: string;
}
