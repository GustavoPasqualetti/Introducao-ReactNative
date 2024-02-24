import { Button, View } from "react-native"

export const Navigation = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
            <Button
            title="login"
            onPress={() => navigation.navigate("Login")}
            />
            <Button
            title="Home"
            onPress={() => navigation.navigate("Home")}
            />
            <Button
            title="HomeUser"
            onPress={() => navigation.navigate("HomeUser")}
            />
            <Button
            title="Profile"
            onPress={() => navigation.navigate("Profile")}
            />
            <Button
            title="InsertRecord"
            onPress={() => navigation.navigate("InsertRecord")}
            />
            
        </View>
    )
}