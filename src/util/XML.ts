import Card from "../Structs/Interfaces/Card";

export function parseToXML(cardIDArray: Array<Card>, pullID: number): string {
    let xmlDataString: string = `
    <?xml version="1.0" encoding="utf-8" ?>
    <deck name="Card Pull #${pullID}">
    <main>
    `;

    cardIDArray.forEach(card => {
        xmlDataString += `<card id="${card.ID}" passcode="${card.Passcode === undefined ? "" : card.Passcode}">${card.Name}</card>\n`;
    });

    xmlDataString += `
    </main>
    <side></side>
    <extra></extra>
    </deck>
    `

    return xmlDataString;
}
