import Card from "../Structs/Interfaces/Card";
import { XMLParser } from "fast-xml-parser";

export function parseToXML(cardIDArray: Array<Card>, pullID: number) {
    let xmlDataString: string = `
    <?xml version="1.0" encoding="utf-8" ?>
    <deck name="Card Pull #${pullID}">
    <main>
    `;

    for (let ygoCard in cardIDArray) {
        xmlDataString = xmlDataString.concat(`
            <card id="${cardIDArray[ygoCard].ID}" passcode="${cardIDArray[ygoCard].Passcode}">${cardIDArray[ygoCard].Name}</card>
        `);
    }

    xmlDataString = xmlDataString.concat(`
    <side></side>
    <extra></extra>
    </deck>
    `);

    const parser = new XMLParser();

    return parser.parse(xmlDataString);
}
