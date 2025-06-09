import PatientTable from "@/components/dashboard/patient-table/patient-table";
import {Patient} from "@/lib/types";

const PatientList = () => {

    const samplePatients: Patient[] = [
        {
            id: "1",
            number: "01",
            name: "Nevaeh Simmons",
            room: "Melati Room",
            age: 23,
            dateOfBirth: "23 February 2023",
            status: "Active",
            email: "nevaeh@example.com",
            phone: "(316) 555-0116",
        },
        {
            id: "2",
            number: "02",
            name: "John Doe",
            room: "Rose Room",
            age: 35,
            dateOfBirth: "15 March 1988",
            status: "Inactive",
            email: "john.doe@example.com",
            phone: "(555) 123-4567",
        },
        {
            id: "3",
            number: "03",
            name: "Jane Smith",
            room: "Lily Room",
            age: 28,
            dateOfBirth: "8 July 1995",
            status: "Pending",
            email: "jane.smith@example.com",
            phone: "(555) 987-6543",
        },
        {
            id: "4",
            number: "04",
            name: "Michael Johnson",
            room: "Orchid Room",
            age: 42,
            dateOfBirth: "12 November 1981",
            status: "Active",
            email: "michael.j@example.com",
            phone: "(555) 246-8135",
        },
    ]

    return (
        <main className="w-full px-10 max-sm:px-2">
            <PatientTable patients={samplePatients} />
        </main>
    )
}

export default PatientList;
