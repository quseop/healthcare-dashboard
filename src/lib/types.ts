export interface Patient {
    id: string
    number: string
    name: string
    room: string
    age: number
    dateOfBirth: string
    status: "Active" | "Inactive" | "Pending"
    email: string
    phone: string
    avatar?: string
}

export type TimePeriod = "Today" | "Weekly" | "Monthly" | "Yearly"
