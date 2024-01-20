import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { FaFileExcel } from "react-icons/fa";

const ExportExcelButton = ({ data, fileName }) => {

    const [show, setShow] = useState(false);

    const getLast24HoursData = () => {
        const twentyFourHoursAgo = new Date();
        twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

        return data.filter(item => new Date(item.date) >= twentyFourHoursAgo);
    };

    const exportToExcel = (hours) => {
        const last24HoursData = getLast24HoursData();

        // Customize your column headers and order here
        const columns = [
            { label: 'ID', key: 'id' },
            { label: 'Date', key: 'date' },
            { label: 'Name', key: 'name' },
            { label: 'Email', key: 'email' },
            { label: 'Phone', key: 'phone' },
            { label: 'Project', key: 'projectName' },
        ];

        // Map data to match the custom column order
        let mappedData = [];
        console.log(hours)
        if (hours) {
            mappedData = last24HoursData.map(item =>
                columns.reduce((acc, column) => {
                    acc[column.label] = item[column.key];
                    return acc;
                }, {})
            );
        }
        else {
            mappedData = data.map(item =>
                columns.reduce((acc, column) => {
                    acc[column.label] = item[column.key];
                    return acc;
                }, {})
            );
        }
        console.log(mappedData)

        const ws = XLSX.utils.json_to_sheet(mappedData, { header: columns.map(column => column.label) });
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, `${fileName}.xlsx`);
    };

    return (
        <div>
            <div className='grid place-content-center'>
                <button onClick={() => setShow(!show)} className='font-semibold outline-2 outline px-4 uppercase flex items-center gap-2'>
                    Export
                    <FaFileExcel />
                </button>
            </div>
            <div className={`mt-5 space-x-5 duration-300 ${show ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                <button onClick={() => exportToExcel(null)} className='text-blue-800 underline' >All</button>
                <button onClick={() => exportToExcel(24)} className='text-blue-800 underline' >Last 24 hours</button>
            </div>
        </div>
    );
};

export default ExportExcelButton;
