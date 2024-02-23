import { InputProfile } from "../InputProfile"
import { Label } from "../label"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidht = 100,
    fieldHeight = 50,
    editable = false,
    textLabel,
    placeholder,
    fieldValue,
    onChangeText = null,
    keyType = 'default',
    maxLenght,
    onBlur = null,
    multiline,
}) => {
    return (
        <FieldContent
            fieldWidht={fieldWidht}
        >
            <Label textLabel={textLabel} />

            <InputProfile
                editable={editable}
                placeholder={placeholder}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                keyType={keyType}
                maxLenght={maxLenght}
                onBlur={onBlur}
                fieldHeight={fieldHeight}
                multiline={multiline}
            />
        </FieldContent>
    )


}