import { InputText } from "./styles";


export function Input({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLenght,
}) {
return(
    <InputText
    placeholder={placeholder}
    editable={editable}
    value={fieldValue}
    onChangeText={onChangeText}
    keyboardType={keyType}
    maxLenght={maxLenght}
    />
)
}