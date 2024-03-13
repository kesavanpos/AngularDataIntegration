export interface Attribute {
  caption: string;
  id: string;
  inputType: string;
  isDataRuleAvailable: boolean;
  isDatagridColumn: boolean;
  isDisplayable: boolean;
  isIdField?: boolean;
  isRelationalAttribute: boolean;
  isTitle?: boolean;
  maxLength?: number;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  searchable?: boolean;
  isDateTime?: boolean;
  setID: string;
  schemaID: string;
}

export interface AttributeSchema {
  AttributeSchema: Attribute[];
}
