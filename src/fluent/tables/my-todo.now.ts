import { Table, StringColumn, MultiLineTextColumn, ChoiceColumn, DateColumn, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_snc_sample1_my_todo = Table({
    name: 'x_snc_sample1_my_todo',
    label: 'My ToDo',
    display: 'short_description',
    createAccessControls: true,
    schema: {
        short_description: StringColumn({
            label: 'Short description',
            maxLength: 160,
            mandatory: true,
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 4000,
        }),
        state: ChoiceColumn({
            label: 'State',
            choices: {
                pending: 'Pending',
                in_progress: 'In Progress',
                complete: 'Complete',
                cancelled: 'Cancelled',
            },
            default: 'pending',
        }),
        priority: ChoiceColumn({
            label: 'Priority',
            choices: {
                '1': 'High',
                '2': 'Medium',
                '3': 'Low',
            },
            default: '3',
        }),
        due_date: DateColumn({ label: 'Due date' }),
        assigned_to: ReferenceColumn({
            label: 'Assigned to',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
        }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
})
