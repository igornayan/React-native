import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig"
import { groupGetAll } from "./groupCreate";

export async function groupCreate(newGroup) {
    try {
        const storedGroups = await groupGetAll();
        const groupAlreadyExists = storedGroups.includes(newGroup);
        
        if (groupAlreadyExists) {
            throw 'Já existe';
        } else {
            const storage = JSON.stringify([...storedGroups, newGroup]);
            await AsyncStorage.setItem(GROUP_COLLECTION, storage);
        }
    } catch (error) {
        throw error;
    }
}