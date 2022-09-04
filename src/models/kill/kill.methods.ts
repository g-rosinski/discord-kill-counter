// import { connect, disconnect } from "utils/database"
// import log from "../../utils/log.js"


// export async function setLastUpdated(this: GameDocument): Promise<void> {
//     const now = new Date();
//     if (!this.lastUpdated || this.lastUpdated < now) {
//       this.lastUpdated = now;
//       await this.save();
//     }
// }
// export async function sameLastName(this: GameDocument): Promise<Document[]> {
//     return this.model("user").find({ lastName: this.lastName });
// }