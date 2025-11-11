import {DashPlatformProtocol} from "./types";
import * as Identifier from "./structs/Identifier";
import * as Identity from "./structs/Identity";
import * as IdentityPublicKey from "./structs/IdentityPublicKey";

export type { IdentityWASM } from './structs/Identity';
export type { IdentifierWASM } from './structs/Identifier';
export type { IdentityPublicKeyWASM } from './structs/IdentityPublicKey';

export class DPP {
  rawDpp: DashPlatformProtocol;

  //structs
  static IdentifierWASM = Identifier.IdentifierWASM;
  static IdentityWASM = Identity.IdentityWASM;
  static IdentityPublicKeyWASM = IdentityPublicKey.IdentityPublicKeyWASM;

  constructor(dpp: DashPlatformProtocol) {
    this.rawDpp = dpp

    Identifier.setDpp(dpp);
    Identity.setDpp(dpp);
    IdentityPublicKey.setDpp(dpp);
  }
}