export const File = {
    name: 'file',
    primaryKey : 'file_id',
    properties: {
        file_date:'date?',
        file_id:'string?',
        file_name:'string?',
        file_path:'string?',
        file_progress:'string?',
        file_size:'float?',
        file_type:'string?',
    }
}