import {DashPlatformProtocol} from "./src/types";
import {DPP} from "./src/dpp";
import * as protocol from 'pshenmic-dpp-napi';

const dpp: DPP = new DPP(protocol);

export const IdentifierWASM = DPP.IdentifierWASM;
export const IdentityWASM = DPP.IdentityWASM;
export const IdentityPublicKeyWASM = DPP.IdentityPublicKeyWASM;

export {KeyType, NetworkWASM, PlatformVersionWASM, Purpose, SecurityLevel} from "./src/types";