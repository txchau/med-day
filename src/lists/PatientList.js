import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';

export const PatientList = (props) => (
    <List title="Patients" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);