import { RowID, RowElement } from './interface.ts'

declare module './crud.js' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): void;
}
