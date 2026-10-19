import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_snc_sample1_my_todo',
    view: default_view,
    sections: [
        {
            caption: 'My ToDo',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'short_description', type: 'table_field' },
                        { field: 'state', type: 'table_field' },
                        { field: 'priority', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'assigned_to', type: 'table_field' },
                        { field: 'due_date', type: 'table_field' },
                        { field: 'active', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'description', type: 'table_field' }],
                },
            ],
        },
    ],
})
