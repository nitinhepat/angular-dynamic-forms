export class FieldModel {
    id: string;
    value: any;
    controlType: string;
    placeHolder: string;
    options: DropdownOption[];
    label: string;
    required: boolean;
    errorMessage: string;
    validationMessage: string;
    pattern: any;
    
    constructor(field: {
        id?: string;
    value?: any;
    controlType?: string;
    placeHolder?: string;
    options?: DropdownOption[];
    label?: string;
    required?: boolean;
    errorMessage?: string;
    validationMessage?: string;
    pattern?: any;
    }){
        if(field){
            this.id = field.id;
            this.value = field.value;
            this.controlType = field.controlType;
            this.placeHolder = field.placeHolder;
            this.options = field.options;
            this.label = field.label;
            this.required = field. required;
            this.errorMessage = field.errorMessage;
            this.validationMessage = field.validationMessage;
            this.pattern = field.pattern;
        }

    }
}

class DropdownOption {
    code: string;
    value: any
}