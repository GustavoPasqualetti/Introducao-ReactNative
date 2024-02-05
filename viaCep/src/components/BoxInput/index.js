import { Input } from "../Input"
import { Label } from "../Label"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidht =  100,
    editable= false,
    textLabel,
    placeholder,
    fieldValue,
    onChangeText = null,
    keyType= 'default',
    maxLenght,
    onBlur = null

}) => {
    return(

        <FieldContent fieldWidht={fieldWidht}>
            <Label textLabel={textLabel}/>

            <Input
              placeholder={placeholder}
              editable={editable}
              fieldValue={fieldValue}
              onChangeText={onChangeText}
              keyType={keyType}
              maxLenght={maxLenght}
              fieldWidht={fieldWidht}
              onBlur={onBlur}
            />

        </FieldContent>

    )
}





