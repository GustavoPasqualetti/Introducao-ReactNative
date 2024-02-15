import { InputText } from "./styled";

export function InputProfile({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLenght,
    onBlur = null,
    fieldWidht = 100
}) {
return(
    <InputText
    placeholder={placeholder}
    editable={editable}
    value={fieldValue}
    onChangeText={onChangeText}
    keyboardType={keyType}
    maxLenght={maxLenght}
    onBlur={onBlur}
    fieldWidht={fieldWidht}
    />
)
}