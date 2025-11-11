import {DashPlatformProtocol, KeyType, NetworkWASM, PlatformVersionWASM, Purpose, SecurityLevel} from "./types";
import * as Identifier from "./structs/Identifier";
import * as Identity from "./structs/Identity";
import * as IdentityPublicKey from "./structs/IdentityPublicKey";

export class DPP {
  rawDpp: DashPlatformProtocol;

  //structs
  IdentifierWASM: typeof Identifier.IdentifierWASM;
  IdentityWASM: typeof Identity.IdentityWASM;
  IdentityPublicKeyWASM: typeof IdentityPublicKey.IdentityPublicKeyWASM;

  //enums
  KeyType: KeyType
  NetworkWASM: NetworkWASM
  PlatformVersionWASM: PlatformVersionWASM
  Purpose: Purpose
  SecurityLevel: SecurityLevel

  constructor(dpp: DashPlatformProtocol) {
    this.rawDpp = dpp

    Identifier.setDpp(dpp);
    Identity.setDpp(dpp);
    IdentityPublicKey.setDpp(dpp);

    this.IdentifierWASM = Identifier.IdentifierWASM;
    this.IdentityWASM = Identity.IdentityWASM;
    this.IdentityPublicKeyWASM = IdentityPublicKey.IdentityPublicKeyWASM;
  }
}