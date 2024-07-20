import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from '@mui/material';

const data = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

const PaginationExample = () => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination
                count={Math.ceil(data.length / rowsPerPage)}
                page={page}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
                style={{ marginTop: '16px' }}
            />
        </TableContainer>
    );
};

export default PaginationExample;
