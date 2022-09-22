import log from "@utils/log";
import { regexEscape } from "@utils/regexValidations";
import { MapModel } from "./map.model";
import { MapDocument } from "./map.types";

export const findByMatch = async (name:string, limit: number = 10): Promise<Array<MapDocument>> => {
    let maps: Array<MapDocument> = []
    try{
        const nameRegex = regexEscape(name)
        maps = await MapModel.find({ 
            name: { $regex: nameRegex, $options: 'i' } 
        }, {
            name: 1
        })
        .sort({name: 1})
        .limit(limit)
    }catch(error){
        const msg = error instanceof Error && error.message 
        log.error(msg || `Error al hacer maps::findByMatch`, {name})
    }
    return maps
}