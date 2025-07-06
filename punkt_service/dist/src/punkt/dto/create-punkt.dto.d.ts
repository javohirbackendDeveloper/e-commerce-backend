declare class WorkingHours {
    day?: String;
    start_time?: string;
    end_time?: string;
}
export declare class CreatePunktDto {
    canTryOn?: boolean;
    punktAdminId: string;
    repairingPunktId: string;
    workingHours: WorkingHours[];
}
export {};
