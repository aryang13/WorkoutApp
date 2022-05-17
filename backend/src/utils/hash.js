import { sha3_256 } from "js-sha3";

export function createHash(username, password) {
    const hashedUsername = sha3_256(username).toString();
    const hashedPassword = sha3_256(password).toString();
    return sha3_256(hashedUsername + hashedPassword).toString();
}