"use client"

import { useState } from "react"
import { Pencil, Trash2 } from "lucide-react"
import Image from "next/image"
import {Patient, TimePeriod} from "@/lib/types";
import {Button} from "@/components/ui/button";

// import type { Patient, TimePeriod } from "./types/patient"





interface PatientTableProps {
    patients: Patient[]
    title?: string
    description?: string
    onEdit?: (patient: Patient) => void
    onDelete?: (patient: Patient) => void
    onTimePeriodChange?: (period: TimePeriod) => void
    selectedPatients?: string[]
    onPatientSelect?: (patientIds: string[]) => void
}

export default function PatientTable({
                                         patients,
                                         title = "Patient Overview",
                                         description = "Lorem ipsum dolor sit amet consectetur sit amet ipsum dolor sit amet consectetur.",
                                         onEdit,
                                         onDelete,
                                         onTimePeriodChange,
                                         selectedPatients = [],
                                         onPatientSelect,
                                     }: PatientTableProps) {
    const [selectedTimePeriod, setSelectedTimePeriod] = useState<TimePeriod>("Today")
    const [localSelectedPatients, setLocalSelectedPatients] = useState<string[]>(selectedPatients)

    const timePeriods: TimePeriod[] = ["Today", "Weekly", "Monthly", "Yearly"]

    const handleTimePeriodChange = (period: TimePeriod) => {
        setSelectedTimePeriod(period)
        onTimePeriodChange?.(period)
    }

    const handleSelectAll = (checked: boolean) => {
        const newSelection = checked ? patients.map((p) => p.id) : []
        setLocalSelectedPatients(newSelection)
        onPatientSelect?.(newSelection)
    }

    const handlePatientSelect = (patientId: string, checked: boolean) => {
        const newSelection = checked
            ? [...localSelectedPatients, patientId]
            : localSelectedPatients.filter((id) => id !== patientId)

        setLocalSelectedPatients(newSelection)
        onPatientSelect?.(newSelection)
    }

    const getStatusColor = (status: Patient["status"]) => {
        switch (status) {
            case "Active":
                return "bg-green-500"
            case "Inactive":
                return "bg-red-500"
            case "Pending":
                return "bg-yellow-500"
            default:
                return "bg-gray-500"
        }
    }

    const allSelected = patients.length > 0 && localSelectedPatients.length === patients.length
    const someSelected = localSelectedPatients.length > 0 && localSelectedPatients.length < patients.length

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-sm">
            <section className="flex justify-between">
                <div className="mb-6">
                    <h2 className="text-xl font-medium text-gray-800">{title}</h2>
                    <p className="text-gray-500 mt-1">{description}</p>
                </div>

                <div className="flex mb-6">
                    <div className="inline-flex rounded-lg overflow-hidden">
                        {timePeriods.map((period) => (
                            <button
                                key={period}
                                onClick={() => handleTimePeriodChange(period)}
                                className={`px-4 py-2 font-medium transition-colors ${
                                    selectedTimePeriod === period
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                                {period}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="text-left text-gray-500 border-b">
                        <th className="pb-3 font-normal">
                            <input
                                type="checkbox"
                                className="rounded border-gray-300"
                                checked={allSelected}
                                ref={(el) => {
                                    if (el) el.indeterminate = someSelected
                                }}
                                onChange={(e) => handleSelectAll(e.target.checked)}
                            />
                        </th>
                        <th className="pb-3 font-normal">No</th>
                        <th className="pb-3 font-normal">Name</th>
                        <th className="pb-3 font-normal">Age</th>
                        <th className="pb-3 font-normal">Date of Birth</th>
                        <th className="pb-3 font-normal">Status</th>
                        <th className="pb-3 font-normal">Email address</th>
                        <th className="pb-3 font-normal">Phone</th>
                        <th className="pb-3 font-normal">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id} className="border-b">
                            <td className="py-4">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300"
                                    checked={localSelectedPatients.includes(patient.id)}
                                    onChange={(e) => handlePatientSelect(patient.id, e.target.checked)}
                                />
                            </td>
                            <td className="py-4 text-gray-500">{patient.number}</td>
                            <td className="py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <Image
                                            src={patient.avatar || "/placeholder.svg?height=40&width=40"}
                                            alt={`${patient.name} avatar`}
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">{patient.name}</p>
                                        <p className="text-gray-500 text-sm">{patient.room}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4">{patient.age}</td>
                            <td className="py-4">{patient.dateOfBirth}</td>
                            <td className="py-4">
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-2 h-2 rounded-full ${getStatusColor(patient.status)}`}></div>
                                    <span className="text-gray-600">{patient.status}</span>
                                </div>
                            </td>
                            <td className="py-4">{patient.email}</td>
                            <td className="py-4">{patient.phone}</td>
                            <td className="py-4">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => onEdit?.(patient)}
                                        className="p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                                        aria-label={`Edit ${patient.name}`}
                                    >
                                        <Pencil className="w-5 h-5" />
                                    </button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => onDelete?.(patient)}
                                        className="p-1.5 text-white rounded-md hover:bg-red-700"
                                        aria-label={`Delete ${patient.name}`}
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {patients.length === 0 && <div className="text-center py-8 text-gray-500">No patients found</div>}
            </div>
        </div>
    )
}
