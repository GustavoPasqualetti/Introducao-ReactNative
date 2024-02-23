import { InputText } from "./styled";

export function InputProfile({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLenght,
    onBlur = null,
    fieldWidht = 100,
    fieldHeight = 50,
    multiline
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
    fieldHeight={fieldHeight}
    multiline={multiline}
    />
)
}