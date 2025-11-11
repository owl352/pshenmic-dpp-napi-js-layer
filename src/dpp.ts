import {DashPlatformProtocol} from "./types";
import * as Identifier from "./structs/Identifier";
import * as Identity from "./structs/Identity";
import * as IdentityPublicKey from "./structs/IdentityPublicKey";

export {IdentifierWASM} from "./structs/Identifier"
export {IdentityWASM} from "./structs/Identity"
export {IdentityPublicKeyWASM} from "./structs/IdentityPublicKey"

export function setDpp(dpp: DashPlatformProtocol) {
  Identifier.setDpp(dpp);
  Identity.setDpp(dpp);
  IdentityPublicKey.setDpp(dpp);
}